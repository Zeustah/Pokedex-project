import { Cache } from "./pokecache.js";

export class PokeAPI {
  #cache: Cache;
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor(interval: number) {
    this.#cache = new Cache(interval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    let url = `${PokeAPI.baseURL}/location-area`;
    if (pageURL) {
      url = pageURL;
    }
    const cachedData = this.#cache.get<ShallowLocations>(url);
    if (cachedData) {
      return cachedData;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    this.#cache.add<ShallowLocations>(url, result);
    return result;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cachedData = this.#cache.get<Location>(url);
    if (cachedData) {
      return cachedData;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    this.#cache.add<Location>(url, result);
    return result;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  name: string;
  location: {
    name: string;
    url: string;
  };
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

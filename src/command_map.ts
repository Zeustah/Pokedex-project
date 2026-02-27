import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  const url = state.nextLocationsURL || undefined;
  const locations = await state.pokeapi.fetchLocations(url);
  for (const map of locations.results) {
    console.log(map.name);
  }
  state.nextLocationsURL = locations.next || "";
  state.prevLocationsURL = locations.previous || "";
}

import { State } from "./state.js";

export async function commandMapb(state: State): Promise<void> {
  const url = state.prevLocationsURL || undefined;
  if (url === undefined) {
    console.log("you're on the first page.");
    return;
  }
  const locations = await state.pokeapi.fetchLocations(url);
  for (const map of locations.results) {
    console.log(map.name);
  }
  state.nextLocationsURL = locations.next || "";
  state.prevLocationsURL = locations.previous || "";
}

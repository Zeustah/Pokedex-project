import { State } from "./state.js";

export async function commandExplore(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length === 0) {
    console.log("A location name is required.");
  }
  const name = args[0];
  const location = await state.pokeapi.fetchLocation(name);
  console.log(`Exploring ${name}`);
  for (const pokes of location.pokemon_encounters) {
    console.log(` - ${pokes.pokemon.name}`);
  }
}

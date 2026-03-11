import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
  const pokedex = state.caughtPokemon;
  if (Object.keys(pokedex).length === 0) {
    console.log("You haven't caught any Pokemon yet!");
  } else {
    console.log("Your pokedex:");
    for (const pokes of Object.keys(pokedex)) {
      console.log(` - ${pokes}`);
    }
  }
}

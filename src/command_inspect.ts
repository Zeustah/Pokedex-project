import { State } from "./state.js";

export async function commandInspect(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length === 0) {
    console.log("Missing pokemon name!");
  } else {
    const pokemonName = args[0];
    if (!state.caughtPokemon[pokemonName]) {
      console.log("You have not caught this Pokemon yet!");
    } else {
      const pokeInfo = state.caughtPokemon[pokemonName];
      console.log(`Name: ${pokeInfo.name}`);
      console.log(`Height: ${pokeInfo.height}`);
      console.log(`Weight: ${pokeInfo.weight}`);
      console.log(`Stats:`);
      for (const stat of pokeInfo.stats) {
        console.log(` -${stat.stat.name}: ${stat.base_stat}`);
      }
      console.log(`Types:`);
      for (const type of pokeInfo.types) {
        console.log(` - ${type.type.name}`);
      }
    }
  }
}

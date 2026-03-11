import { State } from "./state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length === 0) {
    console.log("No pokemon was found.");
  }
  const pokemonName = args[0];
  const pokeInfo = await state.pokeapi.fetchPokemon(pokemonName);
  const catchRate = 100 / (pokeInfo.base_experience + 100);
  const roll = Math.random();
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  if (roll < catchRate) {
    console.log(`${pokemonName} was caught!`);
    state.caughtPokemon[pokeInfo.name] = pokeInfo;
    console.log("You may now inspect it with the inspect command.");
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}

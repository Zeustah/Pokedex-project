import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  caughtPokemon: Record<string, Pokemon>;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export function initState() {
  const commands = getCommands();
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  const pokeapi = new PokeAPI(60000);
  const caughtPokemon = {};
  const nextLocationsURL = "";
  const prevLocationsURL = "";
  const state = {
    readline,
    commands,
    pokeapi,
    caughtPokemon,
    nextLocationsURL,
    prevLocationsURL,
  };
  return state;
}

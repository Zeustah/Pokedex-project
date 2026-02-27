import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./command_registry.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
};

export function initState() {
  const commands = getCommands();
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  const state = { readline, commands };
  return state;
}

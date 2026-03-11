import type { CLICommand } from "./state.js";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays 20 location areas from the Pokemon world",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays previous 20 location areas from the Pokemon world",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Displays pokemon found in provided location",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch the targeted pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect caught pokemon information",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Display caught pokemon",
      callback: commandPokedex,
    },
  };
}

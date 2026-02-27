import { createInterface } from "node:readline";
import { getCommands } from "./command_registry.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const lowered = input.toLowerCase();
  return lowered.trim().split(/\s+/);
}

export function startREPL(state: State) {
  state.readline.prompt();
  state.readline.on("line", (input: string) => {
    if (!input) {
      state.readline.prompt();
    }
    const cmd = state.commands[input];
    if (cmd) {
      cmd.callback(state);
    } else {
      console.log("Unknown command");
    }
    state.readline.prompt();
  });
}

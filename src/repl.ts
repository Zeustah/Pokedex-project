import { createInterface } from "node:readline";
import { getCommands } from "./command_registry.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const lowered = input.toLowerCase();
  return lowered.trim().split(/\s+/);
}

export async function startREPL(state: State) {
  state.readline.prompt();
  state.readline.on("line", async (input: string) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }
    const cmd = state.commands[words[0]];
    const args = words.slice(1);
    if (cmd) {
      try {
        await cmd.callback(state, ...args);
      } catch (error) {
        console.error((error as Error).message);
      }
    } else {
      console.log("Unknown command");
    }
    state.readline.prompt();
  });
}

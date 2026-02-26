export function cleanInput(input: string): string[] {
  const lowered = input.toLowerCase();
  return lowered.trim().split(/\s+/);
}

import { createInterface } from "node:readline";
import type { CLICommand } from "./command.js";
import { getCommands } from "./command_registry.js";
export function startREPL() {
  const commands = getCommands();
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (input: string) => {
    if (!input) {
      rl.prompt();
    }
    const cmd = commands[input];
    if (cmd) {
      cmd.callback(commands);
    } else {
      console.log("Unknown command");
    }
    rl.prompt();
  });
}

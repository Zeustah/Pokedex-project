export function cleanInput(input: string): string[] {
  const lowered = input.toLowerCase();
  return lowered.trim().split(/\s+/);
}

import { createInterface } from "node:readline";
export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (callback: string) => {
    if (!callback) {
      rl.prompt();
    } else {
      const cleanCallback = cleanInput(callback);
      console.log(`Your command was: ${cleanCallback[0]}`);
      rl.prompt();
    }
  });
}

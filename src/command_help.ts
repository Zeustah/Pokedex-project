import { getCommands } from "./command_registry.js";

export function commandHelp() {
  const commands = getCommands();
  console.log("Welcome to the Pokedex!");
  console.log("Usage: \n");
  for (const cmd in commands) {
    console.log(`${commands[cmd].name}: ${commands[cmd].description}`);
  }
}

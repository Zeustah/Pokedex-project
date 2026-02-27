import { State } from "./state.js";
import { getCommands } from "./command_registry.js";

export function commandHelp(state: State) {
  const commands = getCommands();
  console.log("Welcome to the Pokedex!");
  console.log("Usage: \n");
  for (const cmd in state.commands) {
    console.log(
      `${state.commands[cmd].name}: ${state.commands[cmd].description}`,
    );
  }
}

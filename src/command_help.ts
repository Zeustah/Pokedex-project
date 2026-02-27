import { State } from "./state.js";
import { getCommands } from "./command_registry.js";

export async function commandHelp(state: State): Promise<void> {
  const commands = getCommands();
  console.log("Welcome to the Pokedex!");
  console.log("Usage: \n");
  for (const cmd in state.commands) {
    console.log(
      `${state.commands[cmd].name}: ${state.commands[cmd].description}`,
    );
  }
}

export function cleanInput(input: string): string[] {
  const lowered = input.toLowerCase();
  return lowered.trim().split(/\s+/);
}

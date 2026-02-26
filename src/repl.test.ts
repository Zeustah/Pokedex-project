import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "Cyndaquil is the best starter!  ",
    expected: ["cyndaquil", "is", "the", "best", "starter!"],
  },
  {
    input: "  DIALGA palkia DarKRai",
    expected: ["dialga", "palkia", "darkrai"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});

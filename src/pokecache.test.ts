import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval * 2));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});

test("Test Missing key", () => {
  const cache = new Cache(1000);
  const cached = cache.get("test");
  expect(cached).toBe(undefined);
  cache.stopReapLoop();
});

test("Test Override", () => {
  const cache = new Cache(1000);
  cache.add("http://poke.com", "Pikachu");
  cache.add("http://poke.com", "Raichu");
  const cached = cache.get("http://poke.com");
  expect(cached).toBe("Raichu");
  cache.stopReapLoop();
});

test("Test Multiple adds", async () => {
  const interval = 1000;
  const cache = new Cache(interval);
  cache.add("url1", "data1");
  cache.add("url2", "data2");
  const cached1 = cache.get("url1");
  const cached2 = cache.get("url2");
  expect(cached1).toBe("data1");
  expect(cached2).toBe("data2");
  cache.stopReapLoop();
});

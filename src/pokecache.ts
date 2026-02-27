export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(timeInterval: number) {
    this.#interval = timeInterval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    const cacheEntry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: val,
    };
    this.#cache.set(key, cacheEntry);
  }

  get<T>(key: string) {
    const cachedData = this.#cache.get(key);
    if (cachedData !== undefined) {
      return cachedData.val as T;
    }
    return undefined;
  }

  #reap() {
    const now = Date.now();
    for (const [key, entry] of this.#cache) {
      if (entry.createdAt < now - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
    }
    this.#reapIntervalId = undefined;
  }
}

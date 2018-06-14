class IterableObject {
  private allowDebugIgnore = true;

  constructor(private obj) {
    const values = (Object as any).values(obj);

    (Object as any).entries(obj).forEach(pair => {
      const [key, value] = pair;
      this[key] = value;
    });

    const self = this;
    this[Symbol.iterator] = function*() {
      switch (process.env.DEBUG_LEVEL) {
        case '10':
        case !self.allowDebugIgnore && '20':
          yield values[0];
          return;
        default:
          for (const value of values) {
            yield value;
          }
      }
    };
  }

  forEach(cb) {
    return [...this as any].forEach(cb);
  }

  forbidDebugIgnore() {
    this.allowDebugIgnore = false;
    return this;
  }

}


export {IterableObject};

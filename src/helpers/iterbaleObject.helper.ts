class IterableObject {
  private allowDebugIgnore = true;
  private values = null;

  constructor(private obj) {
    this.values = (<any>Object).values(obj);

    (<any>Object).entries(obj).forEach(pair => {
      const [key, value] = pair;
      this[key] = value;
    });

    const self = this;
    this[Symbol.iterator] = function*() {
      switch (process.env.DEBUG_LEVEL) {
        case '10':
        case !self.allowDebugIgnore && '20':
          yield self.values[0];
          return;
        default:
          for (const value of self.values) {
            yield value;
          }
      }
    };
  }

  forEach(cb) {
    let index = 0;
    for (const value of (<any>this)) {
      cb(value, index++, this.values);
    }
  }

  forbidDebugIgnore() {
    this.allowDebugIgnore = false;
    return this;
  }

}


export {IterableObject}

class BaseElementFinder {
  constructor(protected searchFunction: any) {
  }

  id(id) {
    return this.searchFunction('id', id, arguments[1]);
  }

  xpath(xpath, options?) {
    return this.searchFunction('xpath', xpath, arguments[1]);
  }

  className(className, options?) {
    return this.searchFunction('class name', className, arguments[1]);
  }

  text(text, options = {partial: false}) {
    const {partial} = options;
    const locator = partial
      ? `//*[contains(@text, '${text}')]`
      : `//*[@text = '${text}']`;
    return this.searchFunction('xpath', locator, options);
  }
}


export {BaseElementFinder};

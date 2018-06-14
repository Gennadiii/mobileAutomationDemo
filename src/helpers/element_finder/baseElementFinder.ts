interface BaseElementFinderInterface {
  id: (id: string) => () => Promise<any>;
  accessibilityId: (accessibilityId: string) => () => Promise<any>;
  xpath: (xpath: string) => () => Promise<any>;
  className: (className: string) => () => Promise<any>;
  name: (name: string) => () => Promise<any>;
  text: (text: string, options?: findElementByTextInterface) => () => Promise<any>;
}


class BaseElementFinder implements BaseElementFinderInterface {
  constructor(protected searchFunction: any) {
  }

  id(id) {
    return this.searchFunction('id', id, arguments[1]);
  }

  accessibilityId(accessibilityId) {
    return this.searchFunction('accessibility id', accessibilityId, arguments[1]);
  }

  xpath(xpath, options?) {
    return this.searchFunction('xpath', xpath, arguments[1]);
  }

  className(className, options?) {
    return this.searchFunction('class name', className, arguments[1]);
  }

  name(name, options?) {
    return this.searchFunction('name', name, arguments[1]);
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


interface findElementByTextInterface {
  partial?: boolean;
}

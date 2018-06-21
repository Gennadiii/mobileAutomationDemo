interface BaseElementFinderInterface {
  id: (id: string) => () => Promise<any>;
  accessibilityId: (accessibilityId: string) => () => Promise<any>;
  xpath: (xpath: string) => () => Promise<any>;
  className: (className: string) => () => Promise<any>;
  text: (text: string, options?: findElementByTextInterface) => () => Promise<any>;
  autoId: (id: string) => Promise<any>;
  getEfFromElements: (ef: BaseElementFinderInterface, elements: Array<Promise<any>>, index: number) => Promise<any>;
}


class BaseElementFinder implements BaseElementFinderInterface {
  constructor(protected searchFunction: any) {
  }

  id(id) {
    return this.searchFunction('id', id, arguments[1]);
  }

  accessibilityId(accessibilityId, options?) {
    return this.searchFunction('accessibility id', accessibilityId, arguments[1]);
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

  autoId(id, options?) {
    return this.accessibilityId(id, options);
  }

  getEfFromElements(ef, elements, index) {
    return ef.all[elements.using](elements.value, {index});
  }

}


export {BaseElementFinder};


interface findElementByTextInterface {
  partial?: boolean;
}

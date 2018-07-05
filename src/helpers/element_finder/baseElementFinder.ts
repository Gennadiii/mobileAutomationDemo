interface BaseElementFinderInterface {
  id: (id: string) => () => Promise<any>;
  accessibilityId: (accessibilityId: string) => () => Promise<any>;
  xpath: (xpath: string) => () => Promise<any>;
  className: (className: string) => () => Promise<any>;
  name: (name: string) => () => Promise<any>;
  text: (text: string, options?: partialInterface) => () => Promise<any>;
  autoId: (id: string) => Promise<any>;
  element: (using: string, value: string) => Promise<any>;
}


class BaseElementFinder implements BaseElementFinderInterface {

  public autoIdAttribute;

  protected searchFunction;


  constructor(public accessibilityLabelName) {
    this.autoIdAttribute = 'contentDescription';
  }

  id(id, options?) {
    return this.searchFunction('id', id, options);
  }

  accessibilityId(accessibilityId, options?) {
    return this.searchFunction('accessibility id', accessibilityId, options);
  }

  xpath(xpath, options?) {
    return this.searchFunction('xpath', xpath, options);
  }

  className(className, options?) {
    return this.searchFunction('class name', className, options);
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

  autoId(id, options = {partial: false}) {
    const {partial} = options;
    return partial
      ? this.searchFunction('xpath', `//*[contains(@${this.accessibilityLabelName}, '${id}')]`, options)
      : this.accessibilityId(id, options);
  }

  element(using, value, options?) {
    return this.searchFunction(using, value, options);
  }

}


export {BaseElementFinder};


interface partialInterface {
  partial?: boolean;
}

interface BaseElementFinderInterface {
  id: (id: string) => () => Promise<any>;
  accessibilityId: (accessibilityId: string) => () => Promise<any>;
  xpath: (xpath: string) => () => Promise<any>;
  className: (className: string) => () => Promise<any>;
  text: (text: string, options?: partialInterface) => () => Promise<any>;
  autoId: (id: string) => Promise<any>;
  element: (using: string, value: string) => Promise<any>;
}


/**
 * BaseElementFinder provides simple api for finding elements
 * It uses searchFunction which should be defined in child classes
 * and provide automation tool function for locating elements
 * Each method doesn't actually look for an element
 * but returns function which if called - looks for element. This provide lazy search
 */
class BaseElementFinder implements BaseElementFinderInterface {

  protected searchFunction;


  constructor(public accessibilityLabelName, public autoIdAttribute) {
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

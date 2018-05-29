import {driver} from "../../../index";
import {logger} from "../logger.helper";


const log = logger.get('ElementFinder');


interface ElementFinderInterface {
  all: ElementFinderInterface;
  id: (id: string, options?) => () => Promise<any>;
  xpath: (xpath: string, options?) => () => Promise<any>;
  className: (className: string, options?) => () => Promise<any>;
  text: (text: string, options?) => () => Promise<any>;
}


class ElementFinder implements ElementFinderInterface {

  constructor(private searchFunction: any) {
  }

  get all() {
    return new ElementFinder(findElementsBy);
  }

  id(id, options?) {
    return this.searchFunction('id', id, options);
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
      ? `//*[contains(@text, '${text}']`
      : `//*[@text = '${text}']`;
    return this.searchFunction('xpath', locator, options);
  }

}


const ef = new ElementFinder(findElementBy);


export {ef, ElementFinderInterface};


function findElementBy(using: string, value: string) {
  return async () => (await driver).appium.element(using, value);
}

function findElementsBy(using: string, value: string, options?) {
  options = options || {};
  const {index} = options;
  return async () => {
    const elements = await (await driver).appium.elements(using, value);
    elements.length === 0 && log.warn(`Couldn't find elements with search string: ${value}`);
    return index !== undefined ? elements[index] : elements;
  }
}

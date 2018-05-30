import {driver} from "../../../index";
import {logger} from "../logger.helper";


const log = logger.get('ElementFinder');


interface ElementFinderInterface {
  all: ElementsFinderInterface;
  id: (id: string) => () => Promise<any>;
  xpath: (xpath: string) => () => Promise<any>;
  className: (className: string) => () => Promise<any>;
  text: (text: string, options?: findElementByTextInterface) => () => Promise<any>;
}


interface ElementsFinderInterface {
  id: (id: string, options?: findElementsByInterface) => () => Promise<any>;
  xpath: (xpath: string, options?: findElementsByInterface) => () => Promise<any>;
  className: (className: string, options?: findElementsByInterface) => () => Promise<any>;
  text: (text: string, options?: findElementsByTextInterface) => () => Promise<any>;
}


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
      ? `//*[contains(@text, '${text}']`
      : `//*[@text = '${text}']`;
    return this.searchFunction('xpath', locator, options);
  }
}


class ElementFinder extends BaseElementFinder implements ElementFinderInterface {

  constructor(protected searchFunction: any) {
    super(searchFunction);
  }

  get all(): ElementsFinderInterface {
    return new ElementsFinder(findElementsBy);
  }

}


class ElementsFinder extends BaseElementFinder implements ElementsFinderInterface {

  constructor(protected searchFunction: any) {
    super(searchFunction);
  }

}


const ef = new ElementFinder(findElementBy);


export {ef, ElementFinderInterface};


function findElementBy(using: string, value: string) {
  return () => driver.element(using, value);
}

function findElementsBy(using: string, value: string, options?: findElementsByInterface) {
  const defaults = {index: null};
  const resultingOptions = Object.assign(defaults, options);
  const {index} = resultingOptions;

  return () => {
    log.info(`Looking for elements using "${using}" with value: ${value}`);
    const elements = driver.elements(using, value);
    return index !== null ? elements.at(index) : elements;
  }

}


interface findElementsByInterface {
  index?: number;
}


interface findElementByTextInterface {
  partial?: boolean;
}


interface findElementsByTextInterface extends findElementsByInterface {
  partial?: boolean;
}

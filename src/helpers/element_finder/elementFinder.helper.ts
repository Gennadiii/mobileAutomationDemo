import {driver} from "../../../index";
import {logger} from "../logger.helper";
import {BaseElementFinder} from "./baseElementFinder";
import {ElementsFinder} from "./elementsFinder.helper";


const log = logger.get('ElementFinder');


interface ElementFinderInterface {
  all: ElementsFinder;
  id: (id: string) => () => Promise<any>;
  xpath: (xpath: string) => () => Promise<any>;
  className: (className: string) => () => Promise<any>;
  text: (text: string, options?: findElementByTextInterface) => () => Promise<any>;
}


class ElementFinder extends BaseElementFinder implements ElementFinderInterface {

  constructor(protected searchFunction: any) {
    super(searchFunction);
  }

  get all(): ElementsFinder {
    return new ElementsFinder(findElementsBy);
  }

}


const ef = new ElementFinder(findElementBy);


export {ef, ElementFinderInterface};


function findElementBy(using: string, value: string) {
  const elementFinder: any = () => driver.element(using, value);
  elementFinder.using = using;
  elementFinder.value = value;
  return elementFinder;
}

function findElementsBy(using: string, value: string, options?: findElementsByInterface) {
  const defaults = {index: null};
  const resultingOptions = Object.assign(defaults, options);
  const {index} = resultingOptions;

  const elementsFinder: any = () => {
    log.info(`Looking for elements using "${using}" with value: ${value}`);
    const elements = driver.elements(using, value);
    return index !== null ? elements.at(index) : elements;
  };
  elementsFinder.using = using;
  elementsFinder.value = value;
  return elementsFinder;

}


interface findElementsByInterface {
  index?: number;
}


interface findElementByTextInterface {
  partial?: boolean;
}

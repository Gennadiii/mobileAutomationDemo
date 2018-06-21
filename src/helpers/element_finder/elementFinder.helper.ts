import {driver} from "../../../index";
import {logger} from "../logger.helper";
import {BaseElementFinder} from "./baseElementFinder";
import {ElementsFinder} from "./elementsFinder.helper";


const log = logger.get('ElementFinder');


interface ElementFinderInterface extends BaseElementFinder {
  all: ElementsFinder;
  accessibilityLabelName: string;
}


class ElementFinder extends BaseElementFinder implements ElementFinderInterface {

  accessibilityLabelName = this.accessibilityLabelName;

  constructor(protected searchFunction: any, accessibilityLabelName) {
    super(searchFunction);
  }

  get all(): ElementsFinder {
    return new ElementsFinder(findElementsBy);
  }

}


const androidEf = new ElementFinder(findElementBy, 'content-desc');
const iosEf = new ElementFinder(findElementBy, 'name');


export {androidEf, iosEf, ElementFinderInterface};


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


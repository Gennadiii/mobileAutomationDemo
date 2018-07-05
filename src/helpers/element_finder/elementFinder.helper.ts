import {driver} from "../../../index";
import {BaseElementFinder} from "./baseElementFinder";
import {ElementsFinder} from "./elementsFinder.helper";


interface ElementFinderInterface extends BaseElementFinder {
  all: ElementsFinder;
  accessibilityLabelName: string;
}


class ElementFinder extends BaseElementFinder implements ElementFinderInterface {

  protected searchFunction = findElementBy;


  constructor(public accessibilityLabelName) {
    super(accessibilityLabelName);
  }

  get all(): ElementsFinder {
    return new ElementsFinder(this.accessibilityLabelName);
  }

}


export {ElementFinder, ElementFinderInterface};


function findElementBy(using: string, value: string) {
  const elementFinder: any = () => driver.element(using, value);
  elementFinder.using = using;
  elementFinder.value = value;
  return elementFinder;
}

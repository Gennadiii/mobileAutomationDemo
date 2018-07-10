import {driver} from "../../../index";
import {BaseElementFinder} from "./baseElementFinder";
import {ElementsFinder} from "./elementsFinder.helper";


interface ElementFinderInterface extends BaseElementFinder {
  all: ElementsFinder;
  accessibilityLabelName: string;
}


class ElementFinder extends BaseElementFinder implements ElementFinderInterface {

  protected searchFunction = this.findElementBy;


  constructor(public accessibilityLabelName, public autoIdAttribute) {
    super(accessibilityLabelName, autoIdAttribute);
  }

  get all(): ElementsFinder {
    return new ElementsFinder(this.accessibilityLabelName, this.autoIdAttribute);
  }

  private findElementBy(using: string, value: string) {
    const elementFinder: any = () => driver.element(using, value);
    elementFinder.using = using;
    elementFinder.value = value;
    return elementFinder;
  }

}


export {ElementFinder, ElementFinderInterface};

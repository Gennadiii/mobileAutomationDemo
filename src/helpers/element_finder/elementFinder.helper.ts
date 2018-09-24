import {driver} from "../../../index";
import {BaseElementFinder} from "./baseElementFinder";
import {ElementsFinder} from "./elementsFinder.helper";


interface ElementFinderInterface extends BaseElementFinder {
  all: ElementsFinder;
  accessibilityLabelName: string;
}


class ElementFinder extends BaseElementFinder implements ElementFinderInterface {

  constructor(public accessibilityLabelName, public autoIdAttribute, protected textTag) {
    super(accessibilityLabelName, autoIdAttribute, textTag);
  }


  get all(): ElementsFinder {
    return new ElementsFinder(this.accessibilityLabelName, this.autoIdAttribute, this.textTag);
  }

  protected searchFunction(using: string, value: string) {
    const elementFinder: any = () => driver.element(using, value);
    elementFinder.using = using;
    elementFinder.value = value;
    elementFinder.nested = (efFunc) => async () => (await elementFinder()).element(efFunc.using, efFunc.value);
    return elementFinder;
  }

}


export {ElementFinder, ElementFinderInterface};

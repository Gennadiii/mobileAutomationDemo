import {BaseElementFinder} from "./baseElementFinder";
import {driver} from "../../../index";


interface ElementsFinderInterface {
  id: (id: string, options?: findElementsByInterface) => () => Promise<any>;
  accessibilityId: (accessibilityId: string, options?: findElementsByInterface) => () => Promise<any>;
  autoId: (id: string, options?: findElementsByAutoIdInterface) => () => Promise<any>;
  xpath: (xpath: string, options?: findElementsByInterface) => () => Promise<any>;
  className: (className: string, options?: findElementsByInterface) => () => Promise<any>;
  text: (text: string, options?: findElementsByTextInterface) => () => Promise<any>;
}


class ElementsFinder extends BaseElementFinder implements ElementsFinderInterface {

  constructor(public accessibilityLabelName, public autoIdAttribute, protected textTag) {
    super(accessibilityLabelName, autoIdAttribute, textTag);
  }


  protected searchFunction(using: string, value: string, options?: findElementsByInterface) {
    const defaults = {index: null};
    const resultingOptions = Object.assign(defaults, options);
    const {index} = resultingOptions;

    const elementsFinder: any = () => {
      const elements = driver.elements(using, value);
      return index !== null ? elements.at(index) : elements;
    };
    elementsFinder.using = using;
    elementsFinder.value = value;
    return elementsFinder;

  }

}


export {ElementsFinder};


interface findElementsByInterface {
  index?: number;
}


interface findElementsByTextInterface extends findElementsByInterface {
  partial?: boolean;
}


interface findElementsByAutoIdInterface extends findElementsByTextInterface {
}


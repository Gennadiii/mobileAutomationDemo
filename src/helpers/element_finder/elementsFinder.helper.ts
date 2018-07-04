import {BaseElementFinder} from "./baseElementFinder";


interface ElementsFinderInterface {
  id: (id: string, options?: findElementsByInterface) => () => Promise<any>;
  accessibilityId: (accessibilityId: string, options?: findElementsByInterface) => () => Promise<any>;
  autoId: (id: string, options?: findElementsByAutoIdInterface) => () => Promise<any>;
  xpath: (xpath: string, options?: findElementsByInterface) => () => Promise<any>;
  className: (className: string, options?: findElementsByInterface) => () => Promise<any>;
  text: (text: string, options?: findElementsByTextInterface) => () => Promise<any>;
}


class ElementsFinder extends BaseElementFinder implements ElementsFinderInterface {

  constructor(protected searchFunction: any,
              public accessibilityLabelName) {
    super(searchFunction, accessibilityLabelName);
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


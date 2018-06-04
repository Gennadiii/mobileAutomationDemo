import {BaseElementFinder} from "./baseElementFinder";


interface ElementsFinderInterface {
  id: (id: string, options?: findElementsByInterface) => () => Promise<any>;
  xpath: (xpath: string, options?: findElementsByInterface) => () => Promise<any>;
  className: (className: string, options?: findElementsByInterface) => () => Promise<any>;
  text: (text: string, options?: findElementsByTextInterface) => () => Promise<any>;
}


class ElementsFinder extends BaseElementFinder implements ElementsFinderInterface {

  constructor(protected searchFunction: any) {
    super(searchFunction);
  }

}


export {ElementsFinder};


interface findElementsByInterface {
  index?: number;
}


interface findElementsByTextInterface extends findElementsByInterface {
  partial?: boolean;
}

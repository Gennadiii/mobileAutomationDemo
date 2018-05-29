import {ElementFinderInterface} from "./element_finder/elementFinder.helper";


const assembler = {

  buildService(params: buildServiceInterface) {
    const {service, elementFinder, parts} = params;
    const actions = parts.map(part => {
      const {po, pa} = part;
      return new pa(new po(elementFinder));
    });
    return new service(...actions);
  }

};


export {assembler};


interface partInterface {
  po: any;
  pa: any;
}


interface buildServiceInterface {
  service: any;
  elementFinder: ElementFinderInterface;
  parts: partInterface[];
}

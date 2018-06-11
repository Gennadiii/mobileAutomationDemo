import {ElementFinderInterface} from "./element_finder/elementFinder.helper";


const assembler = {

  serviceFactory(params: serviceFactoryInterface) {
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


interface serviceFactoryInterface {
  service: any;
  elementFinder: ElementFinderInterface;
  parts: partInterface[];
}

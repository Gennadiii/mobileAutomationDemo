import {ElementFinderInterface} from "./element_finder/elementFinder.helper";


const assembler = {

  serviceFactory(params: serviceFactoryInterface) {
    const {service, elementFinder, parts, completeServices} = params;

    const actions = parts && parts.map(part => {
      const {po, pa} = part;
      return new pa(new po(elementFinder));
    });

    const services = completeServices && (Object as any).values(completeServices);

    if (actions && services) {
      return new service(...services, ...actions);
    } else if (actions) {
      return new service(...actions);
    } else {
      return new service(...services);
    }
  }

};


export {assembler};


interface partInterface {
  po: any;
  pa: any;
}


interface serviceFactoryInterface {
  service: any;
  elementFinder?: ElementFinderInterface;
  parts?: partInterface[];
  completeServices?: object;
}

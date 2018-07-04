import {driver} from "../../../../index";
import {helper} from "../../../helpers/helper";
import {ComponentsList} from "./componentsList";


const log = helper.logger.get('LongComponentsList');


interface LongComponentsListInterface extends ComponentsList {
  // get
  length: (params?: sizeInterface) => Promise<number>;
}


class LongComponentsList extends ComponentsList implements LongComponentsListInterface {

  constructor(protected ef, protected DesiredComponent, protected elementsFinder) {
    super(ef, DesiredComponent, elementsFinder);
  }


  // override
  async length(params: sizeInterface = {withScroll: true, maxScrolls: 4}) {
    log.info(`Getting count`);
    const {withScroll} = params;
    let {maxScrolls} = params;
    if (!withScroll) {
      return super.length();
    }
    const elementsAttributes = new Set();

    while (maxScrolls--) {
      const elements = await this.elementsFinder();
      const currentElementsNumber = elementsAttributes.size;
      /* tslint:disable-next-line */ // replace with "for await of" after moving to node 10
      for (let j = 0; j < elements.length; j++) {
        elementsAttributes.add(await elements[j].getAttribute(this.ef.autoIdAttribute));
      }
      if (currentElementsNumber === elementsAttributes.size) {
        return elementsAttributes.size;
      }
      await driver.scrollDown();
    }
  }

}


export {LongComponentsList};


interface sizeInterface {
  withScroll: boolean;
  maxScrolls?: number;
}


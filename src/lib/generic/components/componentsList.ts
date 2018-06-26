import {driver} from "../../../../index";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('ComponentsList');


interface ComponentsListInterface {
  // get
  getElementByIndex: (index: number) => any;
  length: (params?: sizeInterface) => Promise<number>;
}


class ComponentsList implements ComponentsListInterface {

  constructor(private ef, private DesiredComponent, private elementsFinder) {
  }


  getElementByIndex(index) {
    return new this.DesiredComponent(this.ef.all.element(
      this.elementsFinder.using,
      this.elementsFinder.value,
      {index}));
  }

  async length(params: sizeInterface = {withScroll: true}) {
    log.info(`Getting count`);
    const {withScroll} = params;
    if (!withScroll) {
      return (await this.elementsFinder()).length;
    }
    const elementValues = new Set();

    while (true) {
      const elements = await this.elementsFinder();
      const currentElementsNumber = elementValues.size;
      elements.forEach(element => elementValues.add(element.value));
      if (currentElementsNumber === elementValues.size) {
        return elementValues.size;
      }
      await driver.scrollDown();
    }
  }

}


export {ComponentsList};


interface sizeInterface {
  withScroll: boolean;
}


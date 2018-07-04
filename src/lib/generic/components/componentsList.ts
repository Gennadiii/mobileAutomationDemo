import {helper} from "../../../helpers/helper";


const log = helper.logger.get('ComponentsList');


interface ComponentsListInterface {
  // get
  getElementByIndex: (index: number) => any;
  length: () => Promise<number>;
}


class ComponentsList implements ComponentsListInterface {

  constructor(protected ef, protected DesiredComponent, protected elementsFinder) {
  }


  getElementByIndex(index) {
    return new this.DesiredComponent(this.ef.all.element(
      this.elementsFinder.using,
      this.elementsFinder.value,
      {index}));
  }

  async length() {
    log.info(`Getting count`);
    return (await this.elementsFinder()).length;
  }

}


export {ComponentsList};

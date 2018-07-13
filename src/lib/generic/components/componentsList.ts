import {helper} from "../../../helpers/helper";


const log = helper.logger.get('ComponentsList');


interface ComponentsListInterface {
  // get
  getElementByIndex: (index: number) => any;
  length: () => Promise<number>;
}


/**
 * Since appium can't look for nested elements it's only possible to work with a list of identical elements
 * For example if we have list of key - value pairs we can only create 2 component lists of keys and values separately
 */
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

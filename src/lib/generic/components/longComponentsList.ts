import {driver} from "../../../../index";
import {helper} from "../../../helpers/helper";
import {ComponentsList} from "./componentsList";


const log = helper.logger.get('LongComponentsList');


interface LongComponentsListInterface extends ComponentsList {
  // get
  length: (params?: lengthInterface) => Promise<number>;
}


/**
 * Mostly needed for android. Long means it doesn't fit the screen.
 * Android's DOM has only elements that are in viewport so to get all elements of list you have to scroll
 * MUST HAVE LongComponentsList elements must be found by partial locator. Full locator must have indexes (item1, item2)
 */
class LongComponentsList extends ComponentsList implements LongComponentsListInterface {

  constructor(protected ef, protected DesiredComponent, protected elementsFinder) {
    super(ef, DesiredComponent, elementsFinder);
  }

  /**
   * If withScroll parameter is set to false - uses length method from super class
   * Otherwise finds all elements on the screen (by partial locator like "item"),
   * takes elements' full autoIdAttribute (like "item1", "item2") and adds them to set
   * then scrolls down and repeats until set's size before and after scroll is identical
   * @param {lengthInterface} params
   * @return {Promise<number>}
   */
  async length(params?: lengthInterface) {
    log.info(`Getting count`);
    const {withScroll = true, waitForElement = false, indexOfElementToWaitFor} = params;
    let {maxScrolls = 4} = params;
    if (!withScroll) {
      return super.length();
    }
    const elementsAttributes = new Set();


    waitForElement && await this.getElementByIndex(indexOfElementToWaitFor).verifyDisplayed();

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
    return elementsAttributes.size;
  }

}


export {LongComponentsList, lengthInterface};


interface lengthInterface {
  withScroll: boolean;
  maxScrolls?: number;
  waitForElement?: boolean;
  indexOfElementToWaitFor?: number;
}


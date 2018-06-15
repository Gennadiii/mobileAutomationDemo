import {Component} from "../component";
import {helper} from "../../../../helpers/helper";
import {driver} from "../../../../../index";


const log = helper.logger.get('BalanceList');


interface BalanceListInterface {
  getCount: () => Promise<number>;
}


class BalanceList extends Component implements BalanceListInterface {

  private currencyNames;
  private balances;


  constructor(private rootEf, private currencyNamesEf, private balancesEf) {
    super(rootEf);
    this.currencyNames = new Component(this.currencyNamesEf);
    this.balances = new Component(this.balancesEf);
  }


  async getCount(params = {withScroll: true}) {
    log.info(`Getting count`);
    const {withScroll} = params;
    if (!withScroll) {
      return (await this.balancesElements).length;
    }
    const elementValues = new Set();

    while (true) {
      const elements = await this.balancesElements;
      const currentElementsNumber = elementValues.size;
      elements.forEach(element => elementValues.add(element.value));
      if (currentElementsNumber === elementValues.size) {
        return elementValues.size;
      }
      await driver.scrollDown();
    }


  }

  private async removeLastElement(elements) {
    elements.splice(-1, 1);
    return elements;
  }

  private get currencyNamesElements() {
    return (async () => this.removeLastElement(await this.currencyNames.element))();
  }

  private get balancesElements() {
    return (async () => this.removeLastElement(await this.balances.element))();
  }

}


export {BalanceList};

import {helper} from "../../../helpers/helper";
import {BasePagePa} from "./basePage.pa";
import {ResultPo} from "../page_objects/result.po";


const log = helper.logger.get('ResultPa');


interface ResultPaInterface extends BasePagePa {
  // actions
  calculate: () => Promise<void>;
  // get
  getResult: () => Promise<number>;
  // wait
  waitForCalculation: (timeout: number) => Promise<void>;
}


class ResultPa extends BasePagePa implements ResultPaInterface {

  constructor(public page: ResultPo) {
    super();
  }


  // actions

  async calculate() {
    log.info(`Calculating`);
    await this.page.countButton.click();
  }

  // get

  async getResult() {
    return +await this.page.resultLabel.getText();
  }

  // wait

  async waitForCalculation(timeout = 5000) {
    await this.page.resultLabel.waitUntilDisplayed(timeout);
  }

}


export {ResultPa};

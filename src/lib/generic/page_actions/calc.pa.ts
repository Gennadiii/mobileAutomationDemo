import {helper} from "../../../helpers/helper";
import {BasePagePa} from "./basePage.pa";
import {CalcPo} from "../page_objects/calc.po";
import {operationsInterface} from "../components/operationsPicker";


const log = helper.logger.get('CalcPa');


interface CalcPaInterface extends BasePagePa {
  // actions
  enterFirstNum: (num: number) => Promise<void>;
  enterSecondNum: (num: number) => Promise<void>;
  changeOperationTo: () => Promise<operationsInterface>;
  calculate: () => Promise<void>;
  // get
  getResult: () => Promise<number>;
  // wait
  waitForCalculation: (timeout: number) => Promise<void>;
}


class CalcPa extends BasePagePa implements CalcPaInterface {

  constructor(public page: CalcPo) {
    super();
  }


  // actions

  async enterFirstNum(num) {
    log.info(`Entering first number: ${num}`);
    await this.page.firstNumField.sendKeys(num);
  }

  changeOperationTo() {
    return this.page.operationsPicker.changeOperationTo();
  }


  async enterSecondNum(num) {
    log.info(`Entering second number: ${num}`);
    await this.page.secondNumField.sendKeys(num);
  }

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


export {CalcPa};

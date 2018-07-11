import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";
import {FieldsPo} from "../page_objects/fields.po";


const log = helper.logger.get('FieldsPa');


interface FieldsPaInterface extends BasePa {
  // actions
  enterFirstNum: (num: number) => Promise<void>;
  enterSecondNum: (num: number) => Promise<void>;

}


class FieldsPa extends BasePa implements FieldsPaInterface {

  constructor(public page: FieldsPo) {
    super();
  }


  // actions

  async enterFirstNum(num) {
    log.info(`Entering first number: ${num}`);
    await this.page.firstNumField.sendKeys(num);
  }


  async enterSecondNum(num) {
    log.info(`Entering second number: ${num}`);
    await this.page.secondNumField.sendKeys(num);
  }

}


export {FieldsPa};

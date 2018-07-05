import {CalcPo} from "../page_objects/calc.po";
import {CalcPa as GenericCalcPa} from "../../generic/page_actions/calc.pa";
import {helper} from "../../../helpers/helper";


interface CalcPaInterface extends GenericCalcPa {
}


class CalcPa extends GenericCalcPa implements CalcPaInterface {

  constructor(public page: CalcPo) {
    super(page);
  }


  // actions

  // override
  async calculate() {
    await super.calculate();
    await helper.dateTime.sleep(500);
    await this.page.declineAlertButton.click();
    await helper.dateTime.sleep(500);
    await this.page.acknowledgeAlertButton.click();
  }


}


export {CalcPa};

import {IosCalcPo} from "../page_objects/iosCalc.po";
import {CalcPa} from "../../generic/page_actions/calc.pa";
import {helper} from "../../../helpers/helper";


interface IosCalcPaInterface extends CalcPa {
}


class IosCalcPa extends CalcPa implements IosCalcPaInterface {

  constructor(public page: IosCalcPo) {
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


export {IosCalcPa};

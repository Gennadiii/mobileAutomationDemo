import {ResultPa} from "../../generic/page_actions/result.pa";
import {IosResultPo} from "../page_objects/iosResult.po";


interface IosResultPaInterface extends ResultPa {
}


class IosResultPa extends ResultPa implements IosResultPaInterface {

  constructor(public page: IosResultPo) {
    super(page);
  }


  // actions

  // override
  async calculate() {
    await super.calculate();
    await this.page.declineAlertButton.click();
    await this.page.acknowledgeAlertButton.click();
  }

}


export {IosResultPa};

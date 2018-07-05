import {ResultPa as GenericResultPa} from "../../generic/page_actions/result.pa";
import {ResultPo} from "../page_objects/result.po";
import {helper} from "../../../helpers/helper";


interface ResultPaInterface extends GenericResultPa {
}


class ResultPa extends GenericResultPa implements ResultPaInterface {

  constructor(public page: ResultPo) {
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


export {ResultPa};

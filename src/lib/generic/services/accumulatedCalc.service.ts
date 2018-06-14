import {BasePagePa} from "../page_actions/basePage.pa";
import {FieldsService} from "./fields.service";
import {OperationsService} from "./operations.service";
import {ResultService} from "./result.service";


interface AccumulatedCalcServiceInterface {
  divide: (num1, num2) => Promise<number>;
}


class AccumulatedCalcService implements AccumulatedCalcServiceInterface {

  page = new BasePagePa();

  constructor(public fields: FieldsService,
              public operations: OperationsService,
              public result: ResultService) {
    this.page.setPages([this.fields.page, this.result.page]);
  }


  async divide(num1, num2) {
    await (await this.operations.changeTo()).division();
    await this.fields.fill(num1, num2);
    return this.result.get();
  }

}


export {AccumulatedCalcService};

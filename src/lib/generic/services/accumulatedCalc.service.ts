import {FieldsService} from "./fields.service";
import {OperationsService} from "./operations.service";
import {ResultService} from "./result.service";
import {BaseService} from "./base.service";


interface AccumulatedCalcServiceInterface {
  divide: (num1, num2) => Promise<number>;
}


class AccumulatedCalcService extends BaseService implements AccumulatedCalcServiceInterface {

  protected staticLogicalPages = [this.fields.page, this.result.page];

  constructor(public fields: FieldsService,
              public operations: OperationsService,
              public result: ResultService) {
    super();
  }


  async divide(num1, num2) {
    await (await this.operations.changeTo()).division();
    await this.fields.fill(num1, num2);
    return this.result.get();
  }

}


export {AccumulatedCalcService};

import {FieldsPa} from "../page_actions/Fields.pa";
import {BaseService} from "./base.service";


interface FieldsServiceInterface {
  fill: (num1, num2) => Promise<void>;
}


class FieldsService extends BaseService implements FieldsServiceInterface {

  constructor(public page: FieldsPa) {
    super();
  }


  async fill(num1, num2) {
    await this.page.enterFirstNum(num1);
    await this.page.enterSecondNum(num2);
  }

}


export {FieldsService};

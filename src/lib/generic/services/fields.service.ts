import {FieldsPa} from "../page_actions/Fields.pa";


interface FieldsServiceInterface {
  fill: (num1, num2) => Promise<void>;
}


class FieldsService implements FieldsServiceInterface {

  constructor(public page: FieldsPa) {
  }


  async fill(num1, num2) {
    await this.page.enterFirstNum(num1);
    await this.page.enterSecondNum(num2);
  }

}


export {FieldsService};

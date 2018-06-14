import {CalcPa} from "../page_actions/calc.pa";


interface CalcServiceInterface {
  multiply: (num1, num2) => Promise<number>;
  divide: (num1, num2) => Promise<number>;
}


class CalcService implements CalcServiceInterface {

  constructor(public page: CalcPa) {
  }


  async multiply(num1, num2) {
    return this.performOperation(
      num1,
      num2,
      await (await this.page.changeOperationTo()).multiplication
    );
  }

  async divide(num1, num2) {
    return this.performOperation(
      num1,
      num2,
      await (await this.page.changeOperationTo()).division
    );
  }

  private async performOperation(num1, num2, operation) {
    await operation();
    await this.page.enterFirstNum(num1);
    await this.page.enterSecondNum(num2);
    await this.page.calculate();
    await this.page.waitForCalculation();
    return this.page.getResult();
  }

}


export {CalcService};

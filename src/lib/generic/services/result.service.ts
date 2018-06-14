import {ResultPa} from "../page_actions/Result.pa";


interface ResultServiceInterface {
  get: () => Promise<number>;
}


class ResultService implements ResultServiceInterface {

  constructor(public page: ResultPa) {
  }


  async get() {
    await this.page.calculate();
    await this.page.waitForCalculation();
    return this.page.getResult();
  }

}


export {ResultService};

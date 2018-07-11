import {ResultPa} from "../page_actions/Result.pa";
import {BaseService} from "./base.service";


interface ResultServiceInterface {
  get: () => Promise<number>;
}


class ResultService extends BaseService implements ResultServiceInterface {

  constructor(public page: ResultPa) {
    super();
  }


  async get() {
    await this.page.calculate();
    await this.page.waitForCalculation();
    return this.page.getResult();
  }

}


export {ResultService};

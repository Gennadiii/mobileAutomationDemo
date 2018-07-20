import {helper} from "../../../../helpers/helper";
import {BasePa} from "../base.pa";
import {FiltersPo} from "../../page_objects/transactions/filters.po";


const log = helper.logger.get('FiltersPa');


interface FiltersPaInterface extends BasePa {
  // actions
  openDateFilter: () => Promise<void>;
  openStatusFilter: () => Promise<void>;
}


class FiltersPa extends BasePa implements FiltersPaInterface {

  constructor(public page: FiltersPo) {
    super();
  }


  async openDateFilter() {
    log.info(`Opening date filter`);
    await this.page.dateFilter.click();
  }

  async openStatusFilter() {
    log.info(`Opening status filter`);
    await this.page.statusFilter.click();
  }

}


export {FiltersPa};

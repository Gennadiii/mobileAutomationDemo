import {BaseService} from "../base.service";
import {FiltersPa} from "../../page_actions/transactions/filters.pa";
import {DateFilterPa} from "../../page_actions/transactions/filters/dateFilter.pa";
import {BalanceFilterPa} from "../../page_actions/transactions/filters/balanceFilter.pa";
import {StatusFilterPa} from "../../page_actions/transactions/filters/statusFilter.pa";
import {TypeFilterPa} from "../../page_actions/transactions/filters/typeFilter.pa";


interface FiltersServiceInterface {
}


class FiltersService extends BaseService implements FiltersServiceInterface {

  constructor(public page: FiltersPa,
              public dateFilter: DateFilterPa,
              public balanceFilter: BalanceFilterPa,
              public statusFilter: StatusFilterPa,
              public typeFilter: TypeFilterPa) {
    super();
  }


}


export {FiltersService};

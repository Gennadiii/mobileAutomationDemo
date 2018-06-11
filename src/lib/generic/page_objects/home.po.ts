import {Label} from "../components/label";
import {BasePagePo} from "./basePage.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../components/button";
import {BalanceList} from "../components/home_balance/balanceList";


interface HomePoInterface extends BasePagePo {
  // balances
  moreBalancesButton: Button;
  mainBalancesList: BalanceList;
  hiddenBalancesList: BalanceList;
  // latest transactions
  latestTransactionsLabel: Label;
  latestTransactionAmount: Label;
}


class HomePo extends BasePagePo implements HomePoInterface {

  name = 'Home';

  // balances

  moreBalancesButton = new Button(this.ef.text('More', {partial: true}));

  mainBalancesList = new BalanceList(
    this.ef.all.xpath(`//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]`),
    this.ef.all.xpath(`//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]`));

  hiddenBalancesList = new BalanceList(
    this.ef.all.xpath(`//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup//android.widget.TextView[1]`),
    this.ef.all.xpath(`//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup//android.widget.TextView[3]`));

  // latest transactions

  latestTransactionsLabel = new Label(this.ef.text('Latest transactions'));

  latestTransactionAmount = new Label(this.ef.xpath(`//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]//android.widget.TextView[3]`));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.latestTransactionsLabel];
  }

}


export {HomePo};

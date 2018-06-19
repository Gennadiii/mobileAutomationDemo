import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BalanceList} from "../../components/home_balance/balanceList";


interface BalanceSectionPoInterface extends BasePagePo {
  moreButton: Button;
  mainList: BalanceList;
  hiddenList: BalanceList;
}


class BalanceSectionPo extends BasePagePo implements BalanceSectionPoInterface {

  name = 'Home - Balance';

  moreButton = new Button(this.ef.text('More', {partial: true}));

  mainList = new BalanceList(
    this.ef.xpath('//android.widget.ScrollView/android.view' +
      '.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view' +
      '.ViewGroup[1]/android.view.ViewGroup'),
    this.ef.all.xpath('//android.widget.ScrollView/android.view' +
      '.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view' +
      '.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]'),
    this.ef.all.xpath('//android.widget.ScrollView/android.view' +
      '.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view' +
      '.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]'));

  hiddenList = new BalanceList(
    this.ef.xpath('//android.widget.ScrollView/android.view' +
      '.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view' +
      '.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'),
    this.ef.all.xpath('//android.widget.ScrollView/android.view' +
      '.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view' +
      '.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup//android.widget.TextView[1]'),
    this.ef.all.xpath('//android.widget.ScrollView/android.view' +
      '.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view' +
      '.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup//android.widget.TextView[3]'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.mainList];
  }

}


export {BalanceSectionPo};

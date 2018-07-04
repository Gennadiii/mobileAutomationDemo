import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {ComponentsList} from "../../components/componentsList";
import {Section} from "../../components/section";
import {Label} from "../../components/label";
import {LongComponentsList} from "../../components/longComponentsList";


interface BalanceSectionPoInterface extends BasePagePo {
  items: ComponentsList;
  currencies: ComponentsList;
  amounts: ComponentsList;
  cards: ComponentsList;
  moreButton: Button;
  lessButton: Button;
  disabledBalanceIcons: ComponentsList;
}


class BalanceSectionPo extends BasePagePo implements BalanceSectionPoInterface {

  name = 'Home - Balance section';

  items = new LongComponentsList(this.ef, Section, this.ef.all.autoId('BalanceItem', {partial: true}));
  currencies = new ComponentsList(this.ef, Label, this.ef.all.autoId('BalanceCurrency'));
  amounts = new ComponentsList(this.ef, Label, this.ef.all.autoId('BalanceAmount'));
  cards = new ComponentsList(this.ef, Label, this.ef.all.autoId('BalanceCardLastDigits'));
  moreButton = new Button(this.ef.autoId('ShowMore'));
  lessButton = new Button(this.ef.autoId('ShowLess'));
  disabledBalanceIcons = new ComponentsList(this.ef, Label, this.ef.all.autoId('BalanceDisabledIcon'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {BalanceSectionPo};

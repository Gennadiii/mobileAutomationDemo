import {BasePa} from "../base.pa";
import {helper} from "../../../../helpers/helper";
import {CardPo} from "../../page_objects/home/Card.po";


const log = helper.logger.get('HomeCardPa');


interface CardPaInterface extends BasePa {
  titleIsDisplayed: () => Promise<boolean>;
}


class CardPa extends BasePa implements CardPaInterface {

  constructor(public page: CardPo) {
    super();
  }


  // check
  titleIsDisplayed() {
    log.info(`Checking ig card title is displayed`);
    return this.page.title.isDisplayed();
  }
 
}


export {CardPa};

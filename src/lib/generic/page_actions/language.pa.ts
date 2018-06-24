import {LanguagePo} from "../page_objects/Language.po";
import {helper} from "../../../helpers/helper";
import {BasePagePa} from "./basePage.pa";


const log = helper.logger.get('LanguagePa');


interface LanguagePaInterface extends BasePagePa {
}


class LanguagePa extends BasePagePa implements LanguagePaInterface {

  constructor(public page: LanguagePo) {
    super();
  }

}


export {LanguagePa};

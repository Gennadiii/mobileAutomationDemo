import {LanguagePo} from "../page_objects/Language.po";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";


const log = helper.logger.get('LanguagePa');


interface LanguagePaInterface extends BasePa {
}


class LanguagePa extends BasePa implements LanguagePaInterface {

  constructor(public page: LanguagePo) {
    super();
  }

}


export {LanguagePa};

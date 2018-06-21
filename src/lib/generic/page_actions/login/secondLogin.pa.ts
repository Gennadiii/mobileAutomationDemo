import {SecondLoginPo} from "../../page_objects/login/SecondLogin.po";
import {BaseLoginPa} from "./baseLogin.pa";


interface SecondLoginPaInterface extends BaseLoginPa {
}


class SecondLoginPa extends BaseLoginPa implements SecondLoginPaInterface {

  constructor(public page: SecondLoginPo) {
    super(page);
  }

}


export {SecondLoginPa};

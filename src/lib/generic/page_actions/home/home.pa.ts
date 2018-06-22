import {BasePagePa} from "../basePage.pa";
import {HomePo} from "../../page_objects/home/home.po";


interface HomePaInterface extends BasePagePa {
}


class HomePa extends BasePagePa implements HomePaInterface {

  constructor(public page: HomePo) {
    super();
  }

}


export {HomePa};

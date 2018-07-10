import {BasePa} from "../base.pa";
import {HomePo} from "../../page_objects/home/home.po";


interface HomePaInterface extends BasePa {
}


class HomePa extends BasePa implements HomePaInterface {

  constructor(public page: HomePo) {
    super();
  }

}


export {HomePa};

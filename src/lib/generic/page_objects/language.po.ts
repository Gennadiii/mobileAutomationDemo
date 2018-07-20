import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "./base.po";
import {ComponentsList} from "../components/componentsList";
import {Button} from "../components/button";


interface LanguagePoInterface {
  languages: ComponentsList;
}


class LanguagePo extends BasePo implements LanguagePoInterface {

  name = 'Language';

  languages = new ComponentsList(this.ef, Button, this.ef.all.autoId('Language'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.languages.getElementByIndex(1)];
  }

}


export {LanguagePo};

import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "./basePage.po";
import {ComponentsList} from "../components/componentsList";
import {Button} from "../components/button";
import {Component} from "../components/component";


interface LanguagePoInterface {
  languages: ComponentsList;
}


class LanguagePo extends BasePagePo implements LanguagePoInterface {

  languages = new ComponentsList(this.ef, Button, this.ef.all.autoId('Language'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [new Component(this.ef.text('English'))];
    // return [this.languages.getElementByIndex(1)]; // todo
  }

}


export {LanguagePo};

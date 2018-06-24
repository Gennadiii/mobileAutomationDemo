import {LanguagePa} from "../page_actions/Language.pa";


interface LanguageServiceInterface {
}


class LanguageService implements LanguageServiceInterface {

  constructor(public page: LanguagePa) {
  }


}


export {LanguageService};

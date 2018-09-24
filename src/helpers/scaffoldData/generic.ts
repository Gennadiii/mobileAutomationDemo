import {stringHelper} from "../string.helper";


/* tslint:disable:max-line-length*/

const generic = {


  po(params: getGenericTemplateInterface) {
    const {name} = params;
    const className = name + 'Po';
    return `import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "./base.po";


interface ${className}Interface extends BasePo {
  
}


class ${className} extends BasePo implements ${className}Interface {

  name = '${className}';
  
  
  

  constructor(private ef: ElementFinderInterface) {
    super();
  }

  
  get staticElements() {
    return [this.];
  }

}


export {${className}};
`;
  },


  pa(params: getGenericTemplateInterface) {
    const {name} = params;
    const className = name + 'Pa';
    const injectedClassFileName = stringHelper.unCapitalize(name) + '.po';
    const injectedClassName = name.replace(/\..*/, name) + 'Po';

    return `import {${injectedClassName}} from "../page_objects/${injectedClassFileName}";
import {helper} from "../../../helpers/helper";
import {BasePa} from "./base.pa";


const log = helper.logger.get('${className}');


interface ${className}Interface extends BasePa {
  
}


class ${className} extends BasePa implements ${className}Interface {

  constructor(public page: ${injectedClassName}) {
    super();
  }

}


export {${className}};
`;
  },


  service(params: getGenericTemplateInterface) {
    const {name} = params;
    const className = name + 'Service';
    const injectedClassFileName = stringHelper.unCapitalize(name) + '.pa';
    const injectedClassName = name.replace(/\..*/, name) + 'Pa';

    return `import {${injectedClassName}} from "../page_actions/${injectedClassFileName}";
import {BaseService} from "./base.service";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('${className}');


interface ${className}Interface extends BaseService {
}


class ${className} extends BaseService implements ${className}Interface {

  constructor(public page: ${injectedClassName}) {
    super();
  }

}


export {${className}};
`;
  }

};


export {generic};


interface getGenericTemplateInterface {
  name: string;
}

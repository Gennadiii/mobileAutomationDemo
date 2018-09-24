interface BasePoInterface {
  staticElements: Array<Promise<boolean>>;
}


/**
 * BasePo is the parent class for each page objects class.
 * It's purpose is to have abstract property name to know which page is under test
 * It also has abstract getters for static elements and content needed for elements check
 */
abstract class BasePo implements BasePoInterface {

  abstract name: string;

  abstract get staticElements(): any[];

}


export {BasePo};

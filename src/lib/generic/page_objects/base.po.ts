interface BasePoInterface {
  staticElements: Array<Promise<boolean>>;
  content: Array<Promise<boolean>>;
}


/**
 * BasePo is the parent class for each page objects class.
 * It's purpose is to have property name with value "Base" which if appeared in logs
 * would mean that child class doesn't have it's own name property and logs are incorrect
 * It also has getters with errors which are needed for the purpose if child class misses those getters
 */
class BasePo implements BasePoInterface {

  name = 'Base';


  get staticElements(): any {
    return [Promise.reject(new Error('staticElements getter should be overridden in child classes'))];
  }

  get content(): any {
    return [Promise.reject(new Error('content getter should be overridden in child classes'))];
  }

}


export {BasePo};

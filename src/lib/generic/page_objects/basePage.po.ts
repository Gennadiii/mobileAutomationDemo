interface BasePagePoInterface {
  staticElements: Array<Promise<boolean>>;
  content: Array<Promise<boolean>>;
}


class BasePagePo implements BasePagePoInterface {

  name = 'Base';


  get staticElements(): any {
    return [Promise.reject(new Error('staticElements getter should be overridden in child classes'))];
  }

  get content(): any {
    return [Promise.reject(new Error('content getter should be overridden in child classes'))];
  }

}


export {BasePagePo};

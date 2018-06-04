interface BasePagePoInterface {
  staticElements: Promise<boolean>[];
}


class BasePagePo implements BasePagePoInterface {

  name = 'Base';

  get staticElements(): any {
    return [Promise.reject(new Error('staticElements getter should be overridden in child classes'))];
  }

}


export {BasePagePo};
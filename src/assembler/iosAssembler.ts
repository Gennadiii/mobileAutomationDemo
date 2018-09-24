import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";
import {ElementFinder} from "../helpers/element_finder/elementFinder.helper";
import {assembleServices} from "./genericServices";


function assembleIos(): assemblerInterface {

  const elementFinder = new ElementFinder('name', 'name', 'value');

  Object.assign(helper.lib.all.generic.page_objects, helper.lib.all.ios.page_objects);
  Object.assign(helper.lib.all.generic.page_actions, helper.lib.all.ios.page_actions);

  return assembleServices(
    elementFinder,
    helper.lib.all.generic);

}


export {assembleIos};

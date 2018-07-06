import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";
import {ElementFinder} from "../helpers/element_finder/elementFinder.helper";
import {driver} from "../../index";
import {assembleServices} from "./genericServices";


function assembleIos(): assemblerInterface {

  const elementFinder = new ElementFinder('name');

  Object.assign(helper.lib.all.generic.page_objects, helper.lib.all.ios.page_objects);
  Object.assign(helper.lib.all.generic.page_actions, helper.lib.all.ios.page_actions);

  return assembleServices(
    elementFinder,
    helper.lib.all.generic,
    driver);

}

export {assembleIos};

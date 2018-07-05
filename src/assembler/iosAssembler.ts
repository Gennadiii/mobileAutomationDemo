import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";
import {ElementFinder} from "../helpers/element_finder/elementFinder.helper";
import {driver} from "../../index";
import {assembleServices} from "./genericServices";


function assembleIos(): assemblerInterface {

  const elementFinder = new ElementFinder('name');

  return assembleServices(elementFinder, helper.lib.all, driver);

}

export {assembleIos};

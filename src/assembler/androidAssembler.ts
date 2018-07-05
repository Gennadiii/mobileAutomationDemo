import {assemblerInterface} from "./assembler";
import {helper} from "../helpers/helper";
import {ElementFinder} from "../helpers/element_finder/elementFinder.helper";
import {driver} from "../../index";
import {assembleGenericServices} from "./genericServices";


const elementFinder = new ElementFinder('content-desc');


const androidServices: assemblerInterface = assembleGenericServices(elementFinder, helper.lib.all, driver);


export {androidServices};

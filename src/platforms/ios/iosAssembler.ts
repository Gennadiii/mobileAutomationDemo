import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";


const {
  generic: {
    page_objects: {
      FieldsPo,
      OperationsPo,
    },
    page_actions: {
      FieldsPa,
      OperationsPa,
    },
    services: {
      CalcService,
      FieldsService,
      OperationsService,
      ResultService,
      AccumulatedCalcService,
    }
  },
  ios: {
    page_objects: {
      IosCalcPo,
      IosResultPo,
    },
    page_actions: {
      IosCalcPa,
      IosResultPa,
    }
  },
} = (helper.lib.all as any);


const fieldsService = helper.assembler.serviceFactory({
  elementFinder,
  service: FieldsService,
  parts: [{po: FieldsPo, pa: FieldsPa}]
});
const operationsService = helper.assembler.serviceFactory({
  elementFinder,
  service: OperationsService,
  parts: [{po: OperationsPo, pa: OperationsPa}]
});
const resultService = helper.assembler.serviceFactory({
  elementFinder,
  service: ResultService,
  parts: [{po: IosResultPo, pa: IosResultPa}]
});


const iosServices: assemblerInterface = {

  calc: helper.assembler.serviceFactory({
    elementFinder,
    service: CalcService,
    parts: [{po: IosCalcPo, pa: IosCalcPa}]
  }),

  accumulatedCalc: new AccumulatedCalcService(fieldsService, operationsService, resultService),

};


export {iosServices};

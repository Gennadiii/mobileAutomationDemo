import {assemblerInterface} from "../../assembler";
import {helper} from "../../helpers/helper";
import {ef as elementFinder} from "../../helpers/element_finder/elementFinder.helper";
import {ResultPa} from "../../lib/generic/page_actions/result.pa";


const {
  generic: {
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
      DividedCalcService,
    }
  },
  ios: {
    page_objects: {
      IosFieldsPo,
      IosCalcPo,
      IosResultPo,
      IosOperationsPo,

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
  parts: [{po: IosFieldsPo, pa: FieldsPa}]
});
const operationsService = helper.assembler.serviceFactory({
  elementFinder,
  service: OperationsService,
  parts: [{po: IosOperationsPo, pa: OperationsPa}]
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

  dividedCalcService: helper.assembler.serviceFactory({
    elementFinder,
    service: DividedCalcService,
    parts: [
      {po: IosFieldsPo, pa: FieldsPa},
      {po: IosOperationsPo, pa: OperationsPa},
      {po: IosResultPo, pa: ResultPa}
    ]
  }),

};


export {iosServices};

import {assemblerInterface} from "../../src/assembler/assembler";
import {driver} from "../../index";


describe('Division', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => {
    await driver.appRelaunch();
    await service.accumulatedCalc.page.verifyIsOpen();
  });

  it('division calculates correctly', async () => {
    expect(await service.accumulatedCalc.divide(84, 2))
      .toEqual(42);
  });

});

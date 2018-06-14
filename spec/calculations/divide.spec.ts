import {assemblerInterface} from "../../src/assembler";


describe('Division', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  beforeAll(async () => await service.accumulatedCalc.page.verifyIsOpen());

  it('division calculates correctly', async () => {
    expect(await service.accumulatedCalc.divide(84, 2))
      .toEqual(42);
  });

});

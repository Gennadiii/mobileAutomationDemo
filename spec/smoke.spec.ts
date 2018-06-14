import {assemblerInterface} from "../src/assembler";


describe('Smoke', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  it('calculator screen loads', async () => {
    expect(await service.calc.page.isOpen())
      .toBeTruthy(`Landing page didn't get opened`);
  });

});

import {assemblerInterface} from "../src/assembler";


describe('Login', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  it('login success', async () => {
    await service.login.eyal();
    expect(await service.home.page.isOpen())
      .toBeTruthy(`Landing page didn't get opened`);
  });

});

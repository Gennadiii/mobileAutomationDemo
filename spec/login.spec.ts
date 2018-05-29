import {assemblerInterface} from "../src/assembler";


describe('Login', () => {
  const service: assemblerInterface = (<any>jasmine.getEnv()).service;

  it('login success', async () => {
    await service.login.eyal();
    expect(await service.landing.page.checkIsOpen())
      .toBeTruthy(`Landing page didn't get opened`);
  });

});

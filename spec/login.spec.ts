import {assemblerInterface} from "../src/assembler";


describe('Login', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;
  const anyUser = service.user.any().allocate();

  afterAll(() => anyUser.free());

  it('login success', async () => {
    await service.login.as(anyUser);
    expect(await service.home.page.isOpen())
      .toBeTruthy(`Landing page didn't get opened`);
  });

});

import {assemblerInterface} from "../../../src/assembler/assembler";


describe('First login', () => {
  describe('Base', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(async () => {
      await service.common.app.relaunch();
      anyUser = service.common.user.any().allocate();
    });
    afterAll(() => anyUser.free());

    it('page content is displayed', async () => {
      expect(await service.login.first.page.contentIsDisplayed())
        .toBe(true, 'Some page content is missing');
    });

    it('successful login', async () => {
      await service.login.first.as(anyUser);
      expect(await service.home.page.isOpen())
        .toBe(true, `Landing page didn't get opened`);
    });

  });
});

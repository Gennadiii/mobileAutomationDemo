import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Second login', () => {
  describe('Base', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(async () => {
      anyUser = service.common.user.any().allocate();
      await service.login.first.as(anyUser);
      await service.common.navigateTo.settings();
      await service.settings.signOut();
    });
    afterAll(() => anyUser.free());

    it('second login page opens when user logs out', async () => {
      expect(await service.login.second.page.isOpen())
        .toBe(true, 'Second login screen did not get opened');
    });

    it('page content is displayed', async () => {
      expect(await service.login.second.page.contentIsDisplayed())
        .toBe(true, 'Some page content is missing');
    });

    it('successful login', async () => {
      await service.login.second.as(anyUser);
      expect(await service.home.page.isOpen())
        .toBe(true, `Home page didn't get opened`);
    });

  });
});

import {assemblerInterface} from "../../../src/assembler";


describe('Second login', () => {
  describe('Options', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(async () => anyUser = service.common.user.any().allocate());
    afterAll(() => anyUser.free());

    beforeEach(async () => {
      await service.login.first.as(anyUser);
      await service.common.navigateTo.settings();
      await service.settings.signOut();
      await service.login.second.page.clickOptionsButton();
    });

    it('gets language page', async () => {
      await service.login.second.page.clickChangeLanguageButton();
      expect(await service.login.second.languagePage.isOpen())
        .toBe(true, 'Language page did not get opened');
    });

    it('gets first login page', async () => {
      await service.login.second.page.clickSwitchAccountButton();
      expect(await service.login.first.page.isOpen())
        .toBe(true, 'Some page content is missing');
    });

  });
});

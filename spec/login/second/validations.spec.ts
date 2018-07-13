import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Second login', () => {
  describe('Basic validations', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(async () => {
      anyUser = service.common.user.any().allocate();
      await service.login.first.as(anyUser);
      await service.common.navigateTo.settings();
      await service.settings.signOut();
    });
    afterAll(() => anyUser.free());

    it('validation error appear for password fields when tapping sign in button with empty field',
      async () => {
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');
      });

    it('error appears when logging in using wrong password', async () => {
      await service.login.second.page.enterPassword('wrongPassword');
      await service.login.second.page.clickSignInButton();

      expect(await service.common.page.isErrorMessageDisplayed())
        .toBe(true, 'Error message is not displayed');
    });

  });
});

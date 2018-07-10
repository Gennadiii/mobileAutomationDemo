import {assemblerInterface} from "../../../src/assembler/assembler";


describe('First login', () => {
  describe('Validations', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(async () => {
      anyUser = service.common.user.any().allocate();
      await service.common.app.relaunch();
      await service.login.first.verifyPageIsOpen();
    });
    afterAll(() => anyUser.free());

    it('validation errors appear for login and password fields when tapping sign in button with empty fields',
      async () => {
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.loginValidationIsDisplayed())
          .toBe(true, 'Login validation is not displayed');
        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');
      });

    it('error appears when logging in using wrong password', async () => {
      await service.login.first.page.enterLogin(anyUser.login);
      await service.login.first.page.enterPassword('wrongPassword');
      await service.login.first.page.clickSignInButton();

      expect(await service.common.page.isErrorMessageDisplayed())
        .toBe(true, 'Error message is not displayed');
    });

    it('error appears when logging in using not existed user', async () => {
      await service.login.first.page.clearLogin();
      await service.login.first.page.clearPassword();
      await service.login.first.page.enterLogin('wrongLogin');
      await service.login.first.page.enterPassword('wrongPassword');
      await service.login.first.page.clickSignInButton();

      expect(await service.common.page.isErrorMessageDisplayed())
        .toBe(true, 'Error message is not displayed');
    });

  });
});

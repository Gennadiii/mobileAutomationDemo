import {assemblerInterface} from "../../../src/assembler";


describe('First login', () => {
  describe('Validations', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(() => anyUser = service.common.user.any().allocate());
    afterAll(() => anyUser.free());
    beforeEach(async () => {
      await service.common.app.relaunch();
      await service.login.first.page.verifyIsOpen();
    });

    it('validation errors appear for login and password fields when tapping sign in button with empty fields',
      async () => {
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.loginValidationIsDisplayed())
          .toBe(true, 'Login validation is not displayed');
        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');
      });

  });
});

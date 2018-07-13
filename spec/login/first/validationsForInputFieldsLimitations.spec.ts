import {assemblerInterface} from "../../../src/assembler/assembler";
import {data} from "../../data";


describe('First login', () => {
  describe('Characters limitations validations', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;

    beforeAll(async () => {
      await service.common.app.relaunch();
      await service.login.first.verifyPageIsOpen();
    });


    it(`login field length is up to ${data.login.loginMaxCharacters} characters`,
      async () => {
        await service.login.first.page.enterLogin(data.login.getLoginWithMaxCharacters());
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.loginValidationIsDisplayed())
          .toBe(false, 'Login validation is displayed');

        await service.login.first.page.clearLogin();
        await service.login.first.page.enterLogin(data.login.getLoginWithMaxCharacters() + '8');
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.loginValidationIsDisplayed())
          .toBe(true, 'Login validation is not displayed');

        await service.login.first.page.clearLogin();
      });


    it(`password field length is up to ${data.login.passwordMaxCharacters} characters`,
      async () => {
        await service.login.first.page.enterPassword(data.login.getPasswordWithMaxCharacters());
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(false, 'Password validation is displayed');

        await service.login.first.page.clearPassword();
        await service.login.first.page.enterPassword(data.login.getPasswordWithMaxCharacters() + '8');
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');

        await service.login.first.page.clearPassword();
      });


    it(`minimum password length is ${data.login.passwordMinCharacters} characters`,
      async () => {
        await service.login.first.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne());
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');

        await service.login.first.page.clearPassword();
        await service.login.first.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne() + '8');
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(false, 'Password validation is displayed');

        await service.login.first.page.clearPassword();
      });


    it(`error appears for invalid characters`,
      async () => {
        await service.login.first.page.enterLogin(' (;_;) ');
        await service.login.first.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne() + 'ы');
        await service.login.first.page.clickSignInButton();

        expect(await service.login.first.page.loginValidationIsDisplayed())
          .toBe(true, 'Login validation is not displayed');
        expect(await service.login.first.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');
      });

  });
});

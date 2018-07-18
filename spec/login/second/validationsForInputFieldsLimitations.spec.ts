import {assemblerInterface} from "../../../src/assembler/assembler";
import {data} from "../../data";


describe('Second login', () => {
  describe('Characters limitations validations', () => {

    const service: assemblerInterface = (jasmine.getEnv() as any).service;
    let anyUser = null;

    beforeAll(async () => {
      anyUser = service.common.user.any().allocate();
      await service.login.first.as(anyUser);
      await service.common.navigateTo.settings();
      await service.settings.signOut();
    });

    afterAll(() => anyUser.free());
    afterEach(async () => await service.login.second.page.clearPassword());


    it(`password field length is up to ${data.login.passwordMaxCharacters} characters`,
      async () => {
        pending('Until anti-harvesting problem is solved');
        await service.login.second.page.enterPassword(data.login.getPasswordWithMaxCharacters());
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(false, 'Password validation is displayed');

        await service.login.second.page.clearPassword();
        await service.login.second.page.enterPassword(data.login.getPasswordWithMaxCharacters() + '8');
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');
      });


    it(`minimum password length is ${data.login.passwordMinCharacters} characters`,
      async () => {
        pending('Until anti-harvesting problem is solved');
        await service.login.second.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne());
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');

        await service.login.second.page.clearPassword();
        await service.login.second.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne() + '8');
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(false, 'Password validation is displayed');
      });


    it(`error appears for invalid characters`,
      async () => {
        await service.login.second.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne() + 'ы');
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');

        await service.login.second.page.clearPassword();
        await service.login.second.page.enterPassword(data.login.getPasswordWithMinCharactersMinusOne() + ' (;_;) ');
        await service.login.second.page.clickSignInButton();

        expect(await service.login.second.page.passwordValidationIsDisplayed())
          .toBe(true, 'Password validation is not displayed');
      });

  });
});

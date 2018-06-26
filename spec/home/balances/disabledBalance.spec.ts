import {assemblerInterface} from "../../../src/assembler";


describe('Home', () => {
  describe('Balances', () => {
    describe('Disabled icon', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let disabledBalanceUser = null;

      beforeAll(async () => {
        disabledBalanceUser = service.common.user.balanceDisabled().allocate();
        await service.login.first.as(disabledBalanceUser);
      });
      afterAll(() => disabledBalanceUser.free());

      it('disabled balance icon is displayed for user with disabled balance', async () => {
        expect(await service.home.balanceSection.page.isDisabledBalanceIconDisplayed())
          .toBe(true, 'Icon is not displayed');
      });

    });
  });
});

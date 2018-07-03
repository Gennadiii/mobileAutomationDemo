import {assemblerInterface} from "../../../src/assembler";


describe('Home', () => {
  describe('Balances', () => {
    describe('Disabled icon', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let disabledBalanceUser = null;
      let blockedCardUser = null;

      beforeAll(async () => {
        disabledBalanceUser = service.common.user.balanceDisabled().allocate();
        blockedCardUser = service.common.user.cardBlocked().allocate();
      });
      afterAll(() => {
        disabledBalanceUser.free();
        blockedCardUser.free();
      });

      it('disabled balance icon is displayed for user with disabled balance', async () => {
        await service.login.first.as(disabledBalanceUser);
        expect(await service.home.balanceSection.page.isDisabledBalanceIconDisplayed())
          .toBe(true, 'Icon is not displayed');
      });

      it('disabled balance icon is displayed for user with blocked balance', async () => {
        await service.login.first.as(blockedCardUser);
        expect(await service.home.balanceSection.page.isDisabledBalanceIconDisplayed())
          .toBe(true, 'Icon is not displayed');
      });

    });
  });
});

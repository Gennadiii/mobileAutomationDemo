import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Home', () => {
  describe('Balances', () => {
    describe('User with no balances', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let noBalancesUser = null;

      beforeAll(async () => {
        noBalancesUser = service.common.user
          .balanceCount(0)
          .allocate();
        await service.login.first.as(noBalancesUser);
      });
      afterAll(() => noBalancesUser.free());

      it('balance section is not displayed', async () => {
        expect(await service.home.sectionIsNotDisplayed())
          .toBe(true, 'Section is displayed');
      });

    });
  });
});

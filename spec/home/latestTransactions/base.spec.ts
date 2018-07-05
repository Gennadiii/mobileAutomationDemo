import {assemblerInterface} from "../../../src/assembler/assembler";


describe('Home', () => {
  describe('Latest transactions', () => {
    describe('Base', () => {

      const service: assemblerInterface = (jasmine.getEnv() as any).service;
      let userWithTransactions = null;

      beforeAll(async () => {
        userWithTransactions = service.common.user.withTransactions().allocate();
        await service.login.first.as(userWithTransactions);
      });
      afterAll(() => userWithTransactions.free());


      it('latest transaction content is displayed', async () => {
        expect(await service.home.latestTransactions.page.contentIsDisplayed())
          .toBe(true, 'Some content is missing');
      });

    });
  });
});

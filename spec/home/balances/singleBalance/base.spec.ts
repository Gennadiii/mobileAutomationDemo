import {assemblerInterface} from "../../../../src/assembler";


describe('Home', () => {
  describe('Balances', () => {
    describe('Single balance', () => {
      describe('Base', () => {

        const service: assemblerInterface = (jasmine.getEnv() as any).service;
        let userWithSingleBalanceAndCard = null;

        beforeAll(async () => {
          userWithSingleBalanceAndCard = service.common.user
            .balanceCount(1)
            .withCards()
            .allocate();
          await service.login.first.as(userWithSingleBalanceAndCard);
        });
        afterAll(() => userWithSingleBalanceAndCard.free());

        it('page content is displayed for user with card', async () => {
          expect(await service.home.singleBalance.page.contentIsDisplayed())
            .toBe(true, 'Some page content is missing');
        });

      });
    });
  });
});

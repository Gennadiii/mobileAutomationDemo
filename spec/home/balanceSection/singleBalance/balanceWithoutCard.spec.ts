import {assemblerInterface} from "../../../../src/assembler/assembler";


describe('Home', () => {
  describe('Balances', () => {
    describe('Single balance', () => {
      describe('Balance without card', () => {

        const service: assemblerInterface = (jasmine.getEnv() as any).service;
        let userWithSingleBalanceNoCard = null;

        beforeAll(async () => {
          userWithSingleBalanceNoCard = service.common.user
            .balanceCount(1)
            .withoutCards()
            .allocate();
          await service.login.first.as(userWithSingleBalanceNoCard);
        });
        afterAll(() => userWithSingleBalanceNoCard.free());

        it('balance content is displayed and card content is not', async () => {
          expect(await service.home.singleBalance.page.balanceContentIsDisplayed())
            .toBe(true, 'Some balance content is missing');
          expect(await service.home.singleBalance.page.cardContentIsNotDisplayed())
            .toBe(true, 'Some card content is displayed');
        });

      });
    });
  });
});

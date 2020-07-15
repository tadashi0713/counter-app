import "testcafe"
import { Selector } from "testcafe";

fixture `CounterFixture`
  .page `http://localhost:3000`;

test('Add 1 item', async t => {
  const firstPlusButton = Selector('.fa-plus-circle').nth(1)
  const cartItemBadge = Selector('.badge-info')
  await t
    .click(firstPlusButton)
    .expect(cartItemBadge.innerText).eql("1")
});

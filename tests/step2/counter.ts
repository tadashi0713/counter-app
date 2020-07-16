import { Selector } from "testcafe";

fixture `CounterFixture`
  .page `http://localhost:3000`;

test('Add 1 item', async t => {
  const firstPlusButton = Selector('.fa-plus-circle').nth(0)
  const cartItemBadge = Selector('.badge-info')
  await t
    .click(firstPlusButton)
    .expect(cartItemBadge.innerText).eql("1")
});

test('Add 2 item', async t => {
  const firstPlusButton = Selector('.fa-plus-circle').nth(0)
  const secondPlusButton = Selector('.fa-plus-circle').nth(1)
  const cartItemBadge = Selector('.badge-info')
  await t
    .click(firstPlusButton)
    .click(secondPlusButton)
    .expect(cartItemBadge.innerText).eql("2")
});

test('Add 3 item', async t => {
  const firstPlusButton = Selector('.fa-plus-circle').nth(0)
  const secondPlusButton = Selector('.fa-plus-circle').nth(1)
  const thirdPlusButton = Selector('.fa-plus-circle').nth(2)
  const cartItemBadge = Selector('.badge-info')
  await t
    .click(firstPlusButton)
    .click(secondPlusButton)
    .click(thirdPlusButton)
    .expect(cartItemBadge.innerText).eql("3")
});
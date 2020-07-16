import "testcafe"
import { ReactSelector } from 'testcafe-react-selectors';

fixture `CounterFixture`
  .page `http://localhost:3000`;

test('Add 0 item', async t => {
  const cartItemBadge = ReactSelector('NavBar')
  const cartItemBadgeComponent = await cartItemBadge.getReact()
  await t
    .expect(cartItemBadgeComponent.props.totalCounters).eql(0)
});

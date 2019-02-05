const { describe, it } = require('mocha');
const assert = require('assert');
const NotificationContainer = require('../behavioral/iterator/iterator');

describe('Iterator example', function () {
  it('should be able to iterate over all the notifications', function() {
    const container = new NotificationContainer();
    container.addNotification('notification 1');
    container.addNotification('notification 2');
    const iterator = container.getIterator();

    let i = 1;
    while(iterator.hasNext()) {
      assert.equal(iterator.getNext().getMessage(), `notification ${i}`);
      i++;
    }
  });

  it('should return false if there are no more notifications to iterate over', function() {
    const container = new NotificationContainer();
    const iterator = container.getIterator();

    assert.ok(!iterator.hasNext());
  });
});
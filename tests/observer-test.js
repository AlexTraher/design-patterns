const { describe, it } = require('mocha');
const assert = require('assert');
const { Publisher, NewspaperReader } = require('../behavioral/observer/observer');

describe('Observer example', function () {
  it('should notify of a change to newspapers', function() {
    const pub = new Publisher();
    const broadsheetReader = new NewspaperReader();
    const tabloidReader = new NewspaperReader();

    pub.subscribeToBroadSheet(broadsheetReader);
    pub.subscribeToTabloid(tabloidReader);
    assert.deepEqual(broadsheetReader.getReadList(), []);
    assert.deepEqual(tabloidReader.getReadList(), []);

    pub.publishNewBroadSheet();

    assert.deepEqual(broadsheetReader.getReadList().length, 1);
    assert.deepEqual(broadsheetReader.getReadList()[0]._type, 'broadsheet');
    assert.deepEqual(tabloidReader.getReadList(), []);

    pub.publishNewTabloid();

    assert.deepEqual(broadsheetReader.getReadList().length, 1);
    assert.deepEqual(tabloidReader.getReadList().length, 1);
    assert.deepEqual(tabloidReader.getReadList()[0]._type, 'tabloid');
  });

  it('should allow a reader to subscribe to both newspaper types', function() {
    const pub = new Publisher();
    const reader = new NewspaperReader();

    pub.subscribeToBroadSheet(reader);
    pub.subscribeToTabloid(reader);

    assert.deepEqual(reader.getReadList(), []);

    pub.publishNewBroadSheet();
    pub.publishNewTabloid();

    assert.deepEqual(reader.getReadList().length, 2);
    assert.deepEqual(reader.getReadList()[0]._type, 'broadsheet');
    assert.deepEqual(reader.getReadList()[1]._type, 'tabloid');
  });

  it('should let a reader read multiple issues', function() {
    const pub = new Publisher();
    const reader = new NewspaperReader();

    pub.subscribeToBroadSheet(reader);

    assert.deepEqual(reader.getReadList(), []);

    pub.publishNewBroadSheet();

    assert.deepEqual(reader.getReadList().length, 1);
    assert.deepEqual(reader.getReadList()[0]._type, 'broadsheet');
    assert.deepEqual(reader.getReadList()[0].issueNumber, 1);

    pub.publishNewBroadSheet();

    assert.deepEqual(reader.getReadList().length, 2);
    assert.deepEqual(reader.getReadList()[1]._type, 'broadsheet');
    assert.deepEqual(reader.getReadList()[1].issueNumber, 2);
  });
});
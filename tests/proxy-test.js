const { describe, it } = require('mocha');
const assert = require('assert');
const { Database, DatabaseProxy } = require('../structural/proxy/proxy');

describe('Proxy example', function() {
  it('should get a result from the db for the first time', function() {
    const database = new Database();
    const databaseProxy = new DatabaseProxy(database);

    const { result, msg } = databaseProxy.getExpensiveQuery('value1');

    assert.equal(result, 'result of value1');
    assert.equal(msg, 'got using db');
  });

  it('should get a result from the cache for the second time', function() {
    const database = new Database();
    const databaseProxy = new DatabaseProxy(database);

    const { result, msg } = databaseProxy.getExpensiveQuery('value1');

    assert.equal(result, 'result of value1');
    assert.equal(msg, 'got using db');

    assert.equal(databaseProxy.getExpensiveQuery('value1').msg, 'got using cache');
  });

  it('should go back to the db for a new query', function() {
    const database = new Database();
    const databaseProxy = new DatabaseProxy(database);

    const { result, msg } = databaseProxy.getExpensiveQuery('value1');

    assert.equal(result, 'result of value1');
    assert.equal(msg, 'got using db');

    assert.equal(databaseProxy.getExpensiveQuery('value2').msg, 'got using db');
  });
});
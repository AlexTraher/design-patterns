const { describe, it } = require('mocha');
const assert = require('assert');
const {
  TeamLead,
  Developer,
  Designer,
  QA,
} = require('../structural/facade/facade');

describe('Facade example', function() {

  it('should let the team lead develop a feature', function() {
    const dev = new Developer();
    const designer = new Designer();
    const qa = new QA();

    const teamLead = new TeamLead(dev, designer, qa);

    const expected = '\ndesigning login\ndeveloping login\npeer reviewing login\nreviewing login\ntesting login\nreleasing login';

    assert.equal(teamLead.developFeature('login'), expected);

  });
});
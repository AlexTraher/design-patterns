const { describe, it } = require('mocha');
const assert = require('assert');
const {
  BoldState,
  ItalicState,
  StandardState,
  Typer,
} = require('../behavioral/state/state');

describe('State example', function () {
  [
    { State: BoldState, expectedPrefix: 'BOLD: ', name: 'bold' },
    { State: ItalicState, expectedPrefix: 'ITALIC: ', name: 'italic' },
    { State: StandardState, expectedPrefix: '', name: 'standard' },
  ].forEach(({ State, expectedPrefix, name }) => {
    it(`should type in ${name} if state is set`, function() {
      const state = new State();
      const typer = new Typer(state);

      assert.equal(typer.type('abc'), `${expectedPrefix}abc`);
    });
  });

  it('should change the output if the state is changed', function() {
    const standardState = new StandardState();
    const italicState = new ItalicState();

    const typer = new Typer(standardState);

    assert.equal(typer.type('abc'), 'abc');

    typer.setState(italicState);

    assert.equal(typer.type('abc'), 'ITALIC: abc');

  });
});
const { describe, it } = require('mocha');
const assert = require('assert');
const RPNEvaulator = require('../behavioral/interpreter/interpreter');

describe('Interpreter example', function () {
  [
    { expression: '52*', expectedResult: 10 },
    { expression: '524*+', expectedResult: 13 },
    { expression: '142+*', expectedResult: 6 },
    { expression: '88*4-', expectedResult: 60 },
    { expression: '88*4/64+-', expectedResult: 6 },
  ].forEach(({ expression, expectedResult }) => {
    it(`should produce the correct result for ${expression} expression`, function() {
      assert.equal(RPNEvaulator.calculateResult(expression), expectedResult);
    });
  });
});
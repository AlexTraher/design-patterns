const { describe, it } = require('mocha');
const assert = require('assert');
const { 
  WoodenSword,
  IronSword,
  DiamondSword,
  LeatherShield,
  WoodenShield,
  IronShield,
} = require('../structural/bridge/bridge');

describe('Bridge example', function() {
 [
  { swordName: 'wooden sword', SwordClass: WoodenSword },
  { swordName: 'iron sword', SwordClass: IronSword },
  { swordName: 'diamond sword', SwordClass: DiamondSword },
 ].forEach(({ swordName, SwordClass }) => {
    [
      { shieldName: 'leather shield', ShieldClass: LeatherShield },
      { shieldName: 'wooden shield', ShieldClass: WoodenShield },
      { shieldName: 'iron shield', ShieldClass: IronShield },
    ].forEach(({ shieldName, ShieldClass }) => {
      it(`should produce a ${swordName} and ${shieldName} combo`, function() {
        const shield = new ShieldClass()
        const sword = new SwordClass(shield);

        assert.equal(sword.swing(), `swing ${swordName}`);
        assert.equal(sword.block(), `block with ${shieldName}`);
      });
    });
 });
});
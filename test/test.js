const expect = require('chai').expect;
const nAry = require('../lib/n-ary.babel.js');

// Test instances
const n = 4;
const l = 2;

describe('#n-ary', () => {
  it(`should return a zero vector`, () => {
    const result = nAry(n)(l).zero;
    expect(JSON.stringify(result)).to.equal('[0,0]');
  });

});

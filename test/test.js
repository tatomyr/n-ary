const expect = require('chai').expect;
const nAry = require('../lib/n-ary.babel.js');

// Test instances
const n = 5;
const l = 3

describe('#n-ary', () => {
  it(`should return a zero vector`, () => {
    const result = nAry(n)(l).zero;
    expect(JSON.stringify(result)).to.equal(JSON.stringify(Array(l).fill(0)));
  });
  it(`should return a last vector`, () => {
    const result = nAry(n)(l).last;
    expect(JSON.stringify(result)).to.equal(JSON.stringify(Array(l).fill(n - 1)));
  });
  it(`should return a zero vector as a result of a last vector incrementation`, () => {
    const result = nAry(n)(l).inc(nAry(n)(l).last);
    expect(JSON.stringify(result)).to.equal(JSON.stringify(nAry(n)(l).zero));
  });
  it(`should return an empty vector`, () => {
    const result = nAry(n)().inc(nAry(n)(l).last);
    expect(JSON.stringify(result)).to.equal('[]');
  });
  it(`should return a proper amount of all data (${n ** l})`, () => {
    const result = nAry(n)(l).all().length;
    expect(result).to.equal(n ** l);
  });
  it(`should return a proper amount of verge data (${n ** l - (n - 1) ** l})`, () => {
    const result = nAry(n)(l).verge().length;
    expect(result).to.equal(n ** l - (n - 1) ** l);
  });

});

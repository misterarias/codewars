// tests/part1/cart-summary-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var permutations = require('../../src/all-balanced-parentheses/functional.js')

describe('permutations', function() {
  [
    {in: [], out: []},
    {in: [1], out: [[1]]},
    {in: [1, 3], out: [[1, 3], [3,1]]},
    {in: [3, 1], out: [[1, 3], [3,1]]},
  ].forEach( (t) => {
    it(`of [${t.in}] should be ${JSON.stringify(t.out)}`, function() {
      var sorted_in = permutations(t.in);
      var sorted_out = t.out;
      expect(sorted_in).to.deep.equal(sorted_out);
    });
  })
});

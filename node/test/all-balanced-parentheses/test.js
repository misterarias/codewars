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
    {in: [1, 3, 5], out: [
      [1, 3, 5], [1, 5, 3], [3,1,5],[3,5,1],[5,1,3],[5,3,1]
    ]},
  ].forEach( (t) => {
    var sorted_out = JSON.stringify(t.out.sort());
    it(`of [${t.in}] should be ${sorted_out}`, function() {
      var sorted_in = JSON.stringify(permutations(t.in).sort());
      expect(sorted_in).to.equal(sorted_out);
    });
  })
});

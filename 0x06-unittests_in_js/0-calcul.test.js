const assert = require('assert');
const calculateNumber = require('./0-calcul');;

describe('calculateNumber', () => {
  it('should return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the rounded sum for greater than .5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the rounded sum for less than .5 and greater than .5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the rounded sum for both greater than .5', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the sum of the rounded sum for both less than .5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.2), 4);
  });
});

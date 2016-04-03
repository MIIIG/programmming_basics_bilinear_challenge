import assert from 'assert';
import solution from './solution';

assert.equal(0,   solution.bilinear(0.5, 0.5, 0, 0, 0, 0));

assert.equal(1,   solution.bilinear(0.0, 0.0, 1, 2, 3, 4));
assert.equal(2,   solution.bilinear(1.0, 0.0, 1, 2, 3, 4));
assert.equal(3,   solution.bilinear(0.0, 1.0, 1, 2, 3, 4));
assert.equal(4,   solution.bilinear(1.0, 1.0, 1, 2, 3, 4));

assert.equal(100, solution.bilinear(0.5, 0.5, 0, 200, 100, 100));
assert.equal(100, solution.bilinear(0.5, 0.0, 0, 200, 100, 100));

assert.equal(0.5, solution.bilinear(0.5, 0.0, 0, 1, 0, 1));

assert.equal(undefined, solution.bilinear(-0.1, 0.5, 0, 200, 100, 100));
assert.equal(undefined, solution.bilinear(0.1, 1.1, 0, 200, 100, 100));

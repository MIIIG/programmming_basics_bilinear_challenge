import assert from 'assert';
import solution from './solution';

assert.equal(0x000000, solution.bilinear(0.5, 0.5, 0x000000, 0x000000, 0x000000, 0x000000));
// console.log(solution.bilinear(0.5, 0.5, 0, 100, 200, 100));
assert.equal(100, solution.bilinear(0.5, 0.5, 0, 100, 200, 100));
//assert.equal(Undefined, solution.bilinear(0.5, 2, 0, 100, 200, 100));
//assert.equal(0x01ab15, solution.bilinear(0.5, 0.5, 0x0000aa, 0x000000, 0x000000, 0x000000));

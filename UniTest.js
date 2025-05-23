// math.js
export function add(a, b) {
  return a + b;
}
// math.test.js
import { add } from './math';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0);
});

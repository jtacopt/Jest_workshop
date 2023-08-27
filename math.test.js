// math.test.js
const { add } = require('./math');

test('soma 1 + 2 para ser igual a 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('soma 5 + 7 para ser igual a 12', () => {
    expect(add(5, 7)).toBe(12);
});

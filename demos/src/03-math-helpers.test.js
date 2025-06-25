const {subtract, isEven} = require('./03-math-helpers.js');



test("Substrac: 10-3 should be 7", () => {
    const result = subtract(10, 3);
    expect(result).toBe(7);
});


test("Substract: 3-10 should be -7", () => {
    const result = subtract(-10, -3);
    expect(result).toBe(-7);
});





test("Is 4 even?", () => {
    const result = isEven(10);
    expect(result).toBe(true);
});


test("Is 3 even?", () => {
    const result = isEven(3);
    expect(result).toBe(false);
});


test ("Is 0 even?", () => {
    const result = isEven(0);
    expect(result).toBe(true);
});
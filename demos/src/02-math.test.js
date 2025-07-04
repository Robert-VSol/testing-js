const {sum, divide, average} = require('./02-math.js')


test("add 1 + 3 should be 4", () => {
  const result = sum(1,3);
  expect(result).toBe(4);
});


test("should be 4",() => {
  const result = sum(1,3);
  expect(result).toBe(4);
});


test("should divide",() => {
  const result = divide(6,3);
  expect(result).toBe(2);
});


test("Average of 3,7 and 11", () => {
  const values = [3, 7, 11];
  const result = average(values);
  expect(result).toBe(7);
});


test("Average of nothing should be 0", () =>{
  const values = [];
  const result = average(values);
  expect(result).toBeNull();
})

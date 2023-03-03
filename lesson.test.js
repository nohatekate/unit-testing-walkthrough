//Import our functions from main.js
const modules = require('./main')
// console.log(modules)
const isEven = modules.isEven 
const divide = modules.divide
const isPositive = modules.isPositive

console.log(isEven)
// This is where all of our test cases belong
//TEST CASE FOR ISEVEN
test("It should return true when called with an even number", () => {
    expect(isEven(4)).toBe(true)
})

//TEST CASE FOR DIVIDE
test("It should return a number when called", () => {
    //if b is 0, the return value would be Infinity. Infinity is still considered a number. Thus passing the test. 
    expect(typeof divide(5,5)).toBe("number")
})

test("It should return true when passed a positive number", () => {
    //Base case: where a number is true
    expect(isPositive(3)).toBe(true);
    //Edge case: consider 0 as true
    expect(isPositive(0)).toBe(true);
  });

test("It should return false when passed a negative number.", () => {
    expect(isPositive(-3)).toBe(false)
})
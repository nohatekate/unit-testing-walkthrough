//This is where we will have a JS functionality - separate from test cases
// given a number, determine if that number is even
function isEven(num) {
  return num % 2 == 0;
}

// divides one number by another number
function divide(a, b) {
    return a / b;
  }

  function isPositive(num){
    if(num >= 0) return true
    return false
  }

//module.exports is maintained by node.js
//module.exports is going to be an object which exports functions we can access anywhere throughout our project/ file structure
//In this case, we are exporting the reference to our function isEven, so that we can test within lesson.test.js
module.exports = {
    isEven,
    divide,
    isPositive
}


  
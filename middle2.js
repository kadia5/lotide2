const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
};

const eqArrays = function (arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false
  }
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] != arg2[i]) {
      return false
    }
  }
  return true;
}

const middle = function (array) {
  let midNum = Math.floor(array.length / 2)
  if (array.length <= 2) {
    return [];
  }
  // for (let element in array) {
  if (array.length % 2 === 0) {
    return [array[midNum]];

  } else {
    const midNum2 = Math.floor(array.length / 2) - 1
    const midNum3 = Math.floor(array.length / 2) 
    return [array[midNum2], array[midNum3]]
  }
  // }
}
middle([1]) // => []
console.log(middle([1, 2])); // => []

middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]

middle([1, 2, 3, 4]) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
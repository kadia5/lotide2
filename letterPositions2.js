// FUNCTION IMPLEMENTATION
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

const assertEqual = function (actual, expected) {

  // passed eq arrays into if statement so arguments are passed down
  if (eqArrays(actual, expected)) {

    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};

const letterPositions = function (sentence) {
  let result = {}
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue

    } else if (!result[sentence[i]]) {
      result[sentence[i]] = [i]

    } else {
      result[sentence[i]].push(i)
    }
  }
  return result

};
console.log(letterPositions("lighthouse labs"))
assertEqual(letterPositions("lighthouse in the house").i, [1, 11]);
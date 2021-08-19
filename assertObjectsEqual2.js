const eqObjects = function (object1, object2) {

  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  console.log("lights", arr1);

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
   const inspect = require('util').inspect; // <= add this line
  // ...
  console.log(`Example label: ${inspect(actual)}`);

  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    
      }else{
        console.log(`Assertion failed: ${actual} !== ${expected}`);
          }
          
};
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3, 4]), false);
eqObjects([1, 2, 3], [1, 2, 3]) // => true
eqObjects([1, 2, 3], [3, 2, 1]) // => false

eqObjects(["1", "2", "3"], ["1", "2", "3"]) // => true
eqObjects(["1", "2", "3"], ["1", "2", 3]) // => false
const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  return true;
};

const head = function(arr) {
  if (arr.length === []) {
    return undefined
  }
  let result = arr[0]
      if (arr.length === 1) {
      return arr[0]
      } else {
        return result
      } 
  
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
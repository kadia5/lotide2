const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  return true;
};

const tail = function(arr){
  arr = [...arr];
  //.shift() method will return entire tail of arr w/o index 0
  arr.shift();
  return arr;


}

// Test Case: Check the original array 
const arr = ["Yo Yo", "Lighthouse", "Labs"];
tail(arr); // no need to capture the return value since we are not checking it
assertEqual(arr.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
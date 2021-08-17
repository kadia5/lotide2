const without = (source, itemsToRemove) => {
  let filteredArray = [];

 
  if (eqArrays(source, itemsToRemove)) {
    return filteredArray;
  }
  for (item of source) {
    if (!(itemsToRemove.includes(item))) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}; 

const eqArrays = function(arg1, arg2) { 
  if (arg1.length !== arg2.length ) {
    return false
  }
  for(let i = 0; i < arg1.length; i++ ){
    if (arg1[i] !== arg2[i] ) {
      return false
    } 
  }
  return true;
}

const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log([actual] !== [expected]);
      }
  
};










const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, ["hello", "world", "lighthouse"]);
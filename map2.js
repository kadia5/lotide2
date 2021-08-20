
// const eqArrays = function(arg1, arg2) { 
//   if (arg1.length !== arg2.length ) {
//     return false
//   }
//   for(let i = 0; i < arg1.length; i++ ){
//     if (arg1[i] != arg2[i] ) {
//       return false
//     } 
//   }
//   return true;
// }

// const assertArraysEqual = function(actual, expected) {
//   if(eqArrays(actual, expected)){
// console.log(`Assertion Passed: ${actual} === ${expected}`);
// return true;

//   }else{
//     console.log(`Assertion failed: ${actual} !== ${expected}`);
//     return false;
//       }
// };


const words = ["ground", "control", "to", "major", "tom"];


const map2 = function (array, callback){
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
//logs=
//item BEFORE:  ground
// item AFTER:  g
// ---
// item BEFORE:  control
// item AFTER:  c etc etc
    results.push(callback(item));
    //removing console logs and adding above code that pushes callback value into results empty arr, completes for loop and just prints result of callback which is 1st letters of each word in an arr
    //print= [ 'g', 'c', 't', 'm', 't' ]

  }
  return results;
}

//declared a new var below that takes in the map2 funct and calls it w/t 2 args needed(arr, callback)as a whole 
//logs the newly declared var results1
const results1 = map(words, word => word[0]);
console.log(results1);


// console.log(assertArraysEqual(eqArrays(results1), true));
// const results2 = words.map(array => array[0]) ;
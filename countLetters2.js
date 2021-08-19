const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  
}

const countLetters = function(letters) {
  const results = {};
  console.log(letters)

  for (const item of letters) {
    console.log(item);
  
      if (results[item]) {
       results[item] += 0;
    } else {
      results[item] = 0;
    
  }
}
return results;

}

const result1 = countLetters("lighthouse labs");
console.log(result1)
assertEqual(result1["l"], 2);
assertEqual(result1["i"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 2);
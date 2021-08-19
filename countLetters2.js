const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  
}

const countLetters = function(letters) {
  
  const results = {};
  for (let i = 0; i < letters.length; i++) {
    let letter = letters.charAt(i);
    // if (results[letter] === ' ') {
    //   letters.replace(/ /g,'')
    // }
    if (results[letter]) {
       results[letter] ++;
    } else {
      results[letter] = 1;
    
  }
}
return   results;

}

const result1 = countLetters("lighthouse labs");
console.log(result1)
assertEqual(result1["l"], 2);
assertEqual(result1["i"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 2);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
  return true;
};
const findKeyByValue = function () {
  let arr = []

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  }
  //for loop goes thru each pair key value
  // for in stores inside obj key doesnt matter what name
  for(let key in bestTVShowsByGenre) {
   //if adds the specific instance thats checked, runs when === returns value
      if (key === "drama") {
        return bestTVShowsByGenre[key]

      }
    }
return "can't find";
  }

  console.log(findKeyByValue());



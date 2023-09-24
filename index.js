function hasTargetSum(array, target) {
  // Write your algorithm here

  
  for(let i = 0 ; i < array.length ; i++) {

    for(let j = i + 1 ; j < array.length ; j++) {
      if((array[i] + array[j]) === target) {
        return true
      } 
    }
  }
  return false
}

    

/* 
  Write the Big O time complexity of your function here

  O(n^2)
*/

/* 
  Add your pseudocode here

  Declare a function named hasTargetSum
   iterate through the array
    iterate through the array with position+1
      if 2 values are equal
         return true
    return false
*/

/*
  Add written explanation of your solution here


  We go through the array twice at the same time, in a way that the loops 
  are one position between each other. That will make it easier for us to add
  the two values and compare their sum to the value "target" given. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

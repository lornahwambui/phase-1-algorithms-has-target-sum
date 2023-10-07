function hasTargetSum(nums, target) {
  // Write your algorithm here
  const Numbers = new Set();
  for(const num of nums){
    const complement=target-num;
    if (Numbers.has(complement)){
      return true;
    }
    Numbers.add(num);{
      return false;
    }
    const numbers=[4,65,78,98,12,3,45,8,1,]
    const targetSum=77;
    const result=hasTargetSum(numbers,targetSum);
    console.log(result)

  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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

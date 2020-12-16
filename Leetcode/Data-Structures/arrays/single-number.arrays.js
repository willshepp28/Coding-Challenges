
/**
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
 */


 /**
  * 
  * 
  * 
  * 1. Create a object to keep track of all numbers in array.
  * 2. Loop throught nums array
  * 3. Push every integer into the obj with corresponding key, and property being the amount of times that integer was matched
  * 4. Check for a key with 1 matches 
  */


/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let obj = {};

//     for(let i = 0; i < nums.length; i++) {
//         if(!obj[nums[i]]) {
//             obj[nums[i]] = 1;
//         } else {
//             obj[nums[i]] = obj[nums[i]] + 1;
//         }
//     }

//     return Object.keys(obj).find(key => obj[key] === 1);
// };

var singleNumber = function(nums) {
    let obj = {};

    for(let i = 0; i < nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            delete obj[nums[i]]
        }
    }

    return Object.keys(obj)[0]
};


singleNumber([2,2,1]) // 1
singleNumber([4,1,2,1,2]) // 4
singleNumber([1]) // 1
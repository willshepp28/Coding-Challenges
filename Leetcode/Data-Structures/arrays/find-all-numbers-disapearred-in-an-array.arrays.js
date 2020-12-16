/**
 *  Find All Numbers Disappeared in an Array
 *      Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

        Find all the elements of [1, n] inclusive that do not appear in this array.

        Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */

/**
 * 
    STEPS
    1. Initilaze a empty array called notIncluded
    2. Sort the nums array from least to greatest
    3. Remove duplicated values from nums array
    4. Iterate over the nums
    5. Check the value of the current index, against the value of the next index
    6. See if it equals the value of the current index + 1. 
       a) if not push the value of the current index + 1 into our notIncluded array
    7. return notincluded array
 */


 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if(!nums.length) return [];
    
    let notIncluded = [];
    nums = [...new Set(nums.sort((a, b) => { return a - b;}))]

    for(let i = 0; i < nums.length; i++) {

       if(i !== nums.length - 1 && nums[i] + 1 !== nums[i+1]) {
        // for(let j = nums[i] + 1; j < nums[i+1]; j ++) {
        //     notIncluded.push(j)
        // }
        notIncluded.push(nums[i] + 1)
       }
    }

    console.log(notIncluded)
    return notIncluded;
};


findDisappearedNumbers([4,3,2,7,8,2,3,1]);
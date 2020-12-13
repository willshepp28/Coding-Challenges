/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.


 */



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(i > 0){
            nums[i] += nums[i-1];
        }
    }
    return nums; 
};


runningSum([1,2,3,4]);
runningSum([1,1,1,1,1])
runningSum([3,1,2,10,1])


/**
 * Runtime: 80 ms, faster than 70.52% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 38.9 MB, less than 64.11% of JavaScript online submissions for Running Sum of 1d Array.
 */
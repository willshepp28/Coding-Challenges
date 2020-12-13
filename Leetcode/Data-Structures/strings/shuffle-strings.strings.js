/**
 * 
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.
 */




/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * 
 * STEPS:
 * 1. Initialze an empty array to hold matched values
 * 2. Loop over all character in the string
 * 3. Push each character, to its corresponding index, 
 */
var restoreString = function(s, indices) {
    let shuffled = [];

    for(let i = 0; i < s.length; i++) {
        shuffled[indices[i]] = s[i];
    }

    return shuffled.join("");
};


// restoreString("codeleet", [4,5,6,7,0,2,1,3])
// restoreString("abc", [0,1,2])
// restoreString("aiohn", [3,1,4,2,0])
// restoreString("aaiougrt", [4,0,2,6,7,3,1,5])


/**
 * Runtime: 96 ms, faster than 33.74% of JavaScript online submissions for Shuffle String.
Memory Usage: 40.5 MB, less than 34.70% of JavaScript online submissions for Shuffle String.
 */


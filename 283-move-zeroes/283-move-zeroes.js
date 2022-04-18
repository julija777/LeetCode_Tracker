/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let position = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[position++] = nums[i];
        }
    }
    
    for (let i = position;i < nums.length; i++) {
        nums[position++] = 0;
    }
};
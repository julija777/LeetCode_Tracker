/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// var rotate = function(nums, k) {
//   for (let i = 0; i < k; i++) {
//       nums.unshift(nums.pop());
//   }

//   return nums;
// };

//Test passed but the Time Limit Exceeded for this Brute Force solution
// The unshift() method adds one or more elements 
// to the beginning of an array and 
// returns the new length of the array.

var rotate = function(nums, k) {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  return nums;
}
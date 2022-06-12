/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
 var minLen = Infinity;
    var sum = 0;
    var start = 0;
    var end = 0;
    while (end < nums.length) {
        sum += nums[end];
        while (sum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return minLen === Infinity ? 0 : minLen;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (nums[mid] === target) {
            if (mid === 0 || nums[mid - 1] < target) {
                break;
            }
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    if (nums[mid] !== target) {
        return [-1, -1];
    }
    left = mid;
    right = mid;
    while (left >= 0 && nums[left] === target) {
        left--;
    }
    while (right < nums.length && nums[right] === target) {
        right++;
    }
    return [left + 1, right - 1];
}

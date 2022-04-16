/**
 * @param {number[]} nums
 * @return {number[]}
 */
// This solution uses a Two Pointer Technique
// We compare the square of the element at the right pointer
// with the element at the left pointer
// We add the max square value to the output array, 
// then we move that element's pointer closer to 
// the opposite side
// We repeat this process until the pointers are equal
// or one pointer has moved past the other
var sortedSquares = function(A) {
        const output = [];
        // define pointers
        let left = 0;
        let right = A.length - 1;
        // index in output array we will add values
        let i = right;
        while (left <= right) {
            // get squared values
            const leftVal = Math.pow(A[left], 2);
            const rightVal = Math.pow(A[right], 2);
            // compare squared values
            if(leftVal > rightVal) {
                // add element to output[i], then subtract 1 
                // from i
                // move pointer closer to the opposite side
                output[i--] = leftVal;
                left++;
            } else {
                output[i--] = rightVal;
                right--;
            }
        }
        return output;
};
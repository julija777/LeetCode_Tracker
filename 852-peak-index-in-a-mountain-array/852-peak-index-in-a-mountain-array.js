/**
 * @param {number[]} arr
 * @return {number}
 */


/*I will use binary search, literally just need to find the biggest 
number in an array, works only if an array is sorted.
Plan: 
1. Name search ends as left and right, which we going to narrow down.
2. run through while right - left > 1
    2.1 divide by two
    2.2 check where is the peak
     2.2.1 if in the right, then move left
     2.2.2 if in the left, then move right
     
     Indexes run towards each other from the right and from the left divided in halves till the peak is found

 */


  var peakIndexInMountainArray = function(arr) {
        let left = -1;
        let right = arr.length;
      
        while (right - left > 1) {
            let mid = Math.floor((left + right) / 2);
            
            if (arr[mid] < arr[mid + 1]) {
                left = mid;
            } else {
                right = mid;
            }
        }
        return left+1;
    }
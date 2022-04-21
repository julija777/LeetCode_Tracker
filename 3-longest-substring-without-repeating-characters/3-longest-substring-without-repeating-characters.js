/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map ={};
    let maxLength = 0; 
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        let lastChar = s[end];
        if (map[lastChar] === undefined) {
            map[lastChar] = 0;
            
        }
        map[lastChar] += 1; //checking dublicates
        while (map[lastChar] > 1) {
            let firstChar = s[start];
            map[firstChar] -= 1;
            start += 1;
            }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength;
};
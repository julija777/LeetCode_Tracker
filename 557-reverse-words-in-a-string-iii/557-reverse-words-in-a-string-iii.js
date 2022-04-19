/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    for (let i = 0; i < words.length; i++){
        const chars = words[i].split('');
        chars.reverse();
        words[i] = chars.join('');
    }
    return words.join(' ')
};
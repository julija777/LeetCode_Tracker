/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//Two pointer solution 

var twoSum = function(numbers, target) {
    let x = 0; //begining of the array
    let y = numbers.length - 1; //the end of the array
    while (x < y) {
        let sum = numbers[x] + numbers[y];
        if (sum === target) break;
        else if (sum > target) y--;
        else x++;
    }
    return [x + 1, y + 1];
};


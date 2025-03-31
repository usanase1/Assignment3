function double(arr) {
    return arr.map(num => num * 2);
}
console.log(double([1, 2, 3])); // Output: [2, 4, 6]

function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterEven([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1, 2, 3, 4])); // Output: 10

function average(arr) {
    return arr.length ? sum(arr) / arr.length : 0;
}
console.log(average([1, 2, 3, 4])); // Output: 2.5

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 4, 5])); // Output: 1

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
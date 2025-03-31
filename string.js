function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}
console.log(capitalize("usanase")); // Output: "Hello world"

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("hello")); // Output: "olleh"

function isPalindrome(str) {
    let cleaned = str.replace(/\s+/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("mom")); // Output: true
console.log(isPalindrome("hello")); // Output: false

function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log(wordCount("Hello world! This is a test.")); // Output: 5

function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}
console.log(toSnakeCase("Hello World")); // Output: "hello_world"

function toCamelCase(str) {
    let words = str.split(/\s+/);
    return words.length ? words[0].toLowerCase() + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') : "";
}
console.log(toCamelCase("hello world example")); // Output: "helloWorldExample"

function longestWord(str) {
    let words = str.split(/\s+/);
    return words.length ? words.reduce((longest, word) => word.length > longest.length ? word : longest, "") : "";
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

function countLetter(str, letter) {
    return str.split(letter).length - 1;
}
console.log(countLetter("hello world", "o")); // Output: 2

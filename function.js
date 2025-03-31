const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

// Example 1: Reverse and capitalize a string
const reverseString = (str) => str.split('').reverse().join('');
const capitalizeString = (str) => str.toUpperCase();
const reverseAndCapitalize = compose(capitalizeString, reverseString);

// Example 2: Double all even numbers in an array
const doubleEvenNumbers = (arr) => arr.map(num => (num % 2 === 0 ? num * 2 : num));

// Transform an array of students
const addStudentStatus = (students) => students.map(student => ({
    ...student,
    status: student.grade > 50 ? 'Pass' : 'Fail'
}));

// Sort array of objects by a given key
const sortByKey = (arr, key) => arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));

// Filter by keyword
const filterByCategory = (products, category) => products.filter(product => product.category === category);

// Simple caching function
const cacheFunction = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};

// Example usage
const students = [
    { name: 'Alice', grade: 55 },
    { name: 'Bob', grade: 45 },
    { name: 'Charlie', grade: 75 }
];
console.log(addStudentStatus(students));

const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shoes', category: 'Fashion' },
    { name: 'Phone', category: 'Electronics' }
];
console.log(filterByCategory(products, 'Electronics'));

const expensiveCalculation = (num) => num * num;
const cachedCalculation = cacheFunction(expensiveCalculation);
console.log(cachedCalculation(5)); // Computed
console.log(cachedCalculation(5)); // Cached result

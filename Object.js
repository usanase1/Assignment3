function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(fullName({ firstName: "John", lastName: "Doe" })); // Output: "John Doe"

function isAdult(person) {
    return person.age >= 18;
}
console.log(isAdult({ name: "Alice", age: 20 })); // Output: true
console.log(isAdult({ name: "Bob", age: 16 })); // Output: false

function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}
console.log(filterByAge([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 25 }
], 18)); // Output: [{ name: "Alice", age: 20 }, { name: "Charlie", age: 25 }]

function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
console.log(addProperty({ name: "Alice" }, "age", 25)); // Output: { name: "Alice", age: 25 }

function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(hasProperty({ name: "Alice", age: 25 }, "age")); // Output: true
console.log(hasProperty({ name: "Alice", age: 25 }, "gender")); // Output: false

function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties({ name: "Alice", age: 25, gender: "female" })); // Output: 3
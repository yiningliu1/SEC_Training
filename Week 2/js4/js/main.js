const myNumber = 42;

const myFloat = 42.0151;

const myString = "42.123abc"

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString + 3);
console.log(Number(myString) === myNumber);

console.log(Number("word"));
console.log(Number(true));

console.log(Number.isInteger(myString))
console.log(Number.parseFloat(myString).toFixed(2))
console.log(Number.parseInt(myString))
console.log(myFloat.toString());
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());
console.log(isNaN("dave"));
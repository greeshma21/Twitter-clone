/* eslint no-use-before-define: 0 */
/*
alert('Hello World!');*/
console.log('Hello World!');

console.log('Variables and constants')
global1 = 10;
console.log(global1);
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped);
const constant1 = global1 + functionScoped -
    blockScoped;
console.log(constant1);

console.log('Variable types');
let numberVariable = 123;
console.log(numberVariable);
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = 'Hello World!';
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean);

console.log('Boolean');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);

console.log('If else');
if(true1) {
    console.log(true);
}
if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('Ternary');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log('ES5 function');
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('ES6 function');
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log('Implied return');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log('Parenthesis and Parameter');
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1);
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(variableArray1);

console.log('Array index and length');
const length1 = numberArray1.length;
console.log(length1);
const index1 = numberArray1.indexOf(3);
console.log(index1);

console.log('Add and remove data to arrays');
// adding new items
numberArray1.push(6);
console.log(numberArray1);
stringArray1.push('string3');
console.log(stringArray1);
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
console.log(numberArray1);
stringArray1.splice(1, 1);
console.log(stringArray1);

console.log('For loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

console.log('Map');
const squares = numberArray1.map(square);
console.log(squares);
const cubes = numberArray1.map(a => a * a * a);
console.log(cubes);

console.log('Find');
const four = numberArray1.find(a => a === 4);
console.log(four);
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3);

console.log('Find index');
const fourIndex = numberArray1.findIndex(a => a === 4);
console.log(fourIndex);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(string3Index);

console.log('Filter');
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(oddNumbers);

console.log('Template strings');
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedIn1 = false;
const greeting2 = `Logged in: ${loggedIn1 ? "Yes" : "No"}`;
console.log(greeting2);









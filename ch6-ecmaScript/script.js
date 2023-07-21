"use strict";

// Javascript Ecma Script.

console.log(`Welcome to Javascript Ecma Script !`);
console.log(`\n Javascript was created in 1996,`);
console.log(`In 1997, Javascript was submitted to ECMA International,`);
console.log(`In 2015, ECMAScript decided to switch to regular release and ES6 was formed.`);

// 2015 => ECMAScript 2015 or ES6 (6th Edition).
// now from 2016 to 2023 => ES7 to ES23.

// New Features in ES6 -

// The let keyword
// The const keyword
// Arrow Functions
// DESTRUCTURING
// TEMPLATE STRINGS
// OBJECT PROPERTIES
// DEFAULT ARGUMENTS
// ARROW FUNCTIONS
// REST OPERATORS
// SPREAD OPERATORS
// The ... Operator
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Object entries
// JavaScript Modules

// let and cost are already explain in ch1 but var is valid inside function(function scope) and let,const is valid in the declared block.
// template literaly I already know.


// now comes Default parameters-

// Default function parameters allow named parameters to be initialized
// with default values if no value or undefined is passed. Example- 

function mu(sd, dc) {
    return sd * dc; // doubt - retuen is returning the result. 
    // That is understood but where the result is caught and
    // without catching/storing, 
    // how it is getting printed in console.log() ?
}

console.log(mu(5, 2));
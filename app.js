//hoisting
function myFunc1() {
  console.log(myString);
}

function myFunc2() {
  console.log(myString);
  var myString = 'foo';
}

//When the JavaScript interpreter reads myFunc2 above,
//it's as though we had written this:

function myFunc2() {
  var myString;
  console.log(myString);
  myString = 'foo';
}

//This example holds true for global scope as well.
//If you had the following code in a file (and not in a function),
//the same hoisting rules apply:

console.log(foo);
var foo = 'foo';
//That code gets interpreted as:

var foo;
console.log(foo);
foo = 'foo';

//Finally, note that hoisting is also why you can call functions
//before you declare them (assuming you're using function declaration
// syntax (function myFunc() {}) over function expression syntax
//(var myFunc = function() {};):

helloWorld();

function helloWorld() {
  console.log('hello world');
}
//When the interpreter encounters this code, it hoists the
//entire function declaration to the top. It's as though we
// had actually written:

function helloWorld() {
  console.log('hello world');
}

helloWorld();

//JavaScript's strict mode. When strict mode is enabled, anytime
//a variable is declared without the var keyword, an error will be
// triggered. Here's an example:

'use strict';

function myFunc() {
  foo = 'foo';
  // do something
}

myFunc(); // => raises `Uncaught ReferenceError`
//The 'use strict' command can be put at the top of a file to enforce strict
// mode for the entire file, or at the top of a function, if you only want
//to use strict mode within the function body. That said, unless you have
//a good reason not to, it's best practice to default to putting 'use
//strict'; at the top of all your JavaScript files.

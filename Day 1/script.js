/* 
    Multi line comment
 */

/**
 * [Press slash, star, star, Enter]
 *
 * JS Doc https://jsdoc.app/
 *
 * My function does this
 *
 * @param ...
 */

// inline comment

/* --------------------------------- */

console.log("Hello from a file");

// PRIMITIVES

// numbers
1;
1_000;
1e5;

// strings
("I am a string");
('I am a "string"');
`another 
multiline
string`; // with backticks

// booleans
true;
false;

// undefined and null
undefined; // variable is undefined by default (no assignment)
null;

// Symbols
Symbol("my symbol");

// OPERATORS

console.log(1 + 1);
console.log(1 - 1);
console.log(3 * 3);
console.log(8 / 9);
console.log(2 % 2);

// OPERATION on strings

console.log("string" + "string"); // --> stringstring

//console.log(prompt('What is your age?') + 10); // '510'

// built-in browser functions (not used a lot!)
// display a msg to the user in a blocking "popup"
// alert('Hello')
// display a msg to the user in a blocking "popup" + ask for a user input (string)
// prompt('Write something')


// VARIABLES

var address; // undefined by default, when no assignment
var firstname = "Peter";
var age = 30;

console.log("Address:", address);
console.log("Name: ", firstname, typeof firstname);
console.log("Age: ", age, typeof age);

// see later for scope consequences
const city = "Esch"; // cannot be modified and needs to be initialized
let phoneNb = "+352000000"; // can be modified

console.log(city + ", Luxembourg");

//city = 'paris'; // throws an error for a const
phoneNb = "1234";

console.log("+352" + phoneNb);

// ARRAYS

/* 
important
- order is maintained
- index is zero based
- can contain anything
- doesn't have to be uniform
*/

const cities = ["Esch", "Lux", "Mamer", "Leudelange"];
// possible but discouraged (harder to code taking all the possibilities in account):
const things = ["hello", 1, null, ["bye"], { prop1: "value" }];

// access items value
console.log(cities[2]); // --> "Mamer"
console.log(things[2], things[3]); // --> null, ['bye']
// built-in property "length"
console.log(cities.length); // 4

// add, remove items
cities.push("Bettembourg", "Dudelange");
console.log(cities, cities.length); // [...], 6
cities.pop();
console.log(cities, cities.length); // [...], 5

// /!\ some methods do not mutate but create copies!
const newCities = cities.slice(2);
console.log(cities, cities.length); // [...], still 5!
console.log(newCities, newCities.length); // [...], 3

// OBJECTS
/**
 * - properties order is not guaranteed
 */
const goose = {
  "outside-color": "gray",
  height: 2,
  tired: false,
  friends: ["goose2", "goose3"],
  honk: () => {
    console.log("honk! honk!");
  },
};
console.log(goose);

// access properties
console.log(goose.height);
console.log(goose["height"]);

let gooseHeight = goose.height;
console.log(gooseHeight);

/* const chosenProperty = prompt("Write a goose property:");
console.log(chosenProperty, goose[chosenProperty]); */

// FUNCTIONS

// function declarations

// generally avoid this one:
function myFunc1() {}

const sayHello = function () {
  console.log("Hello");
};

// arrow syntax (see later for consequences)
const sayGoodbye = () => {
  console.log("Goodbye");
};

// function calls: use parenthesis
sayHello();
sayGoodbye();

// function with one or more parameters and a return
const transformName = function (name, age) {
  return name.toUpperCase() + " is " + age + "yo";
};

// order of the params is important!
const transformedName = transformName('John', 50); // --> JOHN is 50yo
console.log(transformedName)


/**
 * EXERCISE:
 * 
 * Start from a blank HTML page.
 * 
 * First part
 * - create a "connected users" list (array of objects that you create)
 * - In your script, ask the user for his/her firstname (but also if you want the lastname, etc).
 * (- Show the result in the console)
 * - Add the user (object?) to the list of connected users
 * (- show the list of connected users in the console)
 * - Welcome the user + you can inform him/her of how many users are connected
 * 
 * Second part
 * - display the list in the page
 * - display a welcome message to the user in the page
 * 
 * Third part
 * - ask the user for info in a form
 * 
 * --> See exercise.html|js files
 */
// DOM MANIPULATION
window; // global object representing your browser window (width, )
document; // global document object, a little bit broader than your page content (location, referrer, etc.)

// modify the document title
document.title = "test";

// getting elements

// by id
console.log(document.getElementById("first")); // we get only one element because id is always unique (subsequent page elements with same id will get ignored)
console.log(document.getElementsByClassName("item")); // returns an array, even if there is only one or no element. notice the 's' in elementS!

// set an element's text
document.getElementById("first").innerText = "new text";

// getting elements by tag name
console.log(document.getElementsByTagName("input"));

const input = document.getElementsByTagName("input")[0];

// getting specific properties on an input element
console.log(input.value); // value is specific to elements of type input --> 'val'

// ARITHMETIC OPERATORS
// increment
let sum = 1;
sum = sum + 1; // add
sum = sum - 1; // subtract
sum = sum / 1; // divide
sum = sum * 1; // multiply
sum += 1; // add
sum -= 1; // subtract
sum /= 1; // divide
sum *= 1; // multiply

sum++; // increment by one
sum--; // decrement by one

// + works with strings
const text = "this";
text = text + "that"; // -> 'thisthat'
text += "that"; // -> 'thisthat'

// A SIMPLE LOOP
const items = ["item 1", "item 2", "item 3"]; // length of 3, with indexes 0, 1, 2

for (let index = 0; index < items.length; index++) {
  // beginning: index = 0

  // do something
  console.log(items[index]);

  // index++ --> 1
}

// while equivalent
let whileIndex = 0;
while (whileIndex < items.length) {
  console.log("running " + whileIndex);
  whileIndex++;
}

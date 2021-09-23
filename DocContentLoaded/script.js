/*
const article = {
  title: "title 1", 
  text: "aaa",
};

//iterate the keys to find the value
for (const key in article) {
 console.log(article[key]);
}

// Objects.keys: directly returns an array  with the property names
console.log(Object.keys(article));


// Objects.values: directly returns an array with the property values
console.log(Object.values(article));



// Objects.values & iterate:   
Object.values(article).forEach(val => console.log(val));


//iterate in an array
const list = ["Test1", "Test2", "Test3"];

for (const item of list) {
  console.log(item);
 }
 
//iterate in a string
 const list2 = "String";

for (const item of list2) {
  console.log(item);
 }

 // Logic

 const condition1 = true
 
 const condition2 = true
 
 if (condition1 === true) {
  console.log("test passed")
 }

 // Exercise

const list3 = [1,2,6,9,8,5,4,7,23];

list3.forEach((nb) => {
  //check if the number is even
if(nb % 2 == 0) {
  console.log("Fizz");
}
else {
  console.log("Buzz");
}

});

var num = prompt("Please enter your number");
  //check if the number is even
  if(num % 2 == 0) {
    console.log("The number is even.");
  }
  else {
    console.log("The number is odd.");
  }
*/
  console.log(fetch("https://jsonplaceholder.typicode.com/photos"))
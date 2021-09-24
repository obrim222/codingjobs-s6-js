//define start and end and number, is number between start and end

const start = 5;
const end = 10;

const myNumber = 11;

if (myNumber > start && myNumber < end) {
    console.log("between");
} else {
    console.log("not between");
}


//2 check if number is outside


if (myNumber <= start || myNumber  >= end)  {
    console.log("outside");
} else {
    console.log("Inside");
}

//replace ifs with a switch

const userAge = 15;

switch (userAge) {

    case 42:   console.log("This is a nice age");
    break;
    case 15:   console.log("You can enter the website");
    break;
    default: console.log("Something Else");
    break;

}

//DOM manipulation: adding classes and style
const square = document.querySelector("div");

//classname: for simple use cases, harder to manipulate 
square.className = "square";

//classList: will add/remove classes 
square.classList.add("another");
//square.classList.remove("another2");
square.classList.toggle("another");


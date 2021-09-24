//get the list element - done
//create a new user
//add the user class
//inser the user element

const userList = [
  {
    name: "Tom",
    age: "40",
    connected: true,
    numberOfComments: 50,
  },
  {
    name: "Larry",
    age: "33",
    connected: false,
    numberOfComments: 60,
  },
  {
    name: "John",
    age: "50  ",
    connected: false,
    numberOfComments: 60,
  },
];

//Select the list
const listElement = document.querySelector(".list");

//Function to create a post
const createNewUser = function (user) {
  const userWrapperElement = document.createElement("div");
  const createUserElement = document.createElement("div");
  createUserElement.innerText = user.name;
  createUserElement.className = "user";
  //toggle
  createUserElement.classList.toggle("another");
  userWrapperElement.classList.toggle("wrapper");
  userWrapperElement.appendChild(createUserElement);

  listElement.appendChild(userWrapperElement);

  createUserElement.style.backgroundColor = "Red";
};

const userButton = document.querySelector("button#user");

userButton.addEventListener("click", () => {
  displayUsers();
});

const displayUsers = function () {
  listElement.innerHTML = "";
  userList.forEach((user) => {
    createNewUser(user);
  });
};

//timers
setTimeout(() => {
  console.log("hello");
}, 1000);

//intervals
const id = setInterval(() => {
  console.log("hello");
}, 2000);

//claear intervals
clearInterval(id);

//timers with intervals
setTimeout(() => {
  console.log("yo");
  clearInterval(id);
}, 5000);

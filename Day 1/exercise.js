// create a list of connected users (array of objects)
const connectedUsers = [
  { firstname: "John", lastname: "Doe", active: true },
  { firstname: "Mary", lastname: "Doe", active: false },
  { firstname: "Michelle", lastname: "Doe", active: true },
];
console.log("Connected users:", connectedUsers);

// prompt the user for first and last names
const firstname = prompt("Please enter your first name:");
const lastname = prompt("Please enter your last name:");
console.log(firstname, lastname);

// welcome the user
const welcomeMessage = `Welcome on our server, ${firstname} ${lastname}! ${connectedUsers.length} users are currently connected.`;

alert(welcomeMessage);

// create a new user object and add it to the list of connected users
const newUser = { firstname, lastname, active: true };
connectedUsers.push(newUser);
console.log("Connected users (updated):", connectedUsers);

// Second part (optional): show the list in the page and welcome the user
document.getElementById("welcome").innerText = welcomeMessage;
document.getElementById("count").innerText = connectedUsers.length;

// iterate over the connectedUsers list and display first and lastname
for (let index = 0; index < connectedUsers.length; index++) {
  document.getElementById("list").innerHTML += `${
    connectedUsers[index].firstname
  } ${connectedUsers[index].lastname} ${
    connectedUsers[index].active
      ? '<span class="active"></span>'
      : '<span class="inactive"></span>'
  }<br>`;
}

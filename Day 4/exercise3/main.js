const userList = [
    {
      name: "Lager Lager",
      age: "Lager Lager",
      connected: true,
      numberOfComments: 50,
    },
  ];
  

//Select the list
const listElement = document.querySelector(".list");

//Select the list
const createNewUser = function (userObject) {
    const listElement = document.querySelector(".list");
    const userWrapperElement = document.createElement("div");
    const createUserElement = document.createElement("div");
    createUserElement.innerText = userObject.name;
    createUserElement.className = "square";
    listElement.appendChild(createUserElement);
    
    const id = setInterval(() => {
        createUserElement.classList.toggle("blink");
        createUserElement.classList.toggle("blinkText");

      }, 50);

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
  

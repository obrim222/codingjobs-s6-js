/**
 * Home exercise:
 *
 * - create a list of users (objects) - done
 * - user objects need to have some flags (booleans): 'connected', 'numberOfComments' - done
 * - display the list of users in an HTML element with the number of comments - done
 * - add a red/green circle (new element?) next to each user, depending on the 'connected' flag (boolean) - done
 * - sort the list by the number of comments - done
 *
 *
 * Bonus:
 * - add a new property 'comments' to each user object, and display in the page, for each user, a list of its own posts (title is enough)
 *
 */

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
const createPostElement = function (postObject) {
  const postElement = document.createElement("div");

  const postTitleElement = document.createElement("h2");
  postTitleElement.innerText = postObject.name;

  const postCommentElement = document.createElement("h2");
  postCommentElement.innerText = postObject.numberOfComments;

  const postConnectedElement = document.createElement("div");
  
  postElement.appendChild(postConnectedElement);
  postElement.appendChild(postTitleElement);
  postElement.appendChild(postCommentElement);

  if (postObject.connected === true) {
    postConnectedElement.className = "green";
  }
  else {
    postConnectedElement.className = "red";
  }


  listElement.appendChild(postElement);
};

const displayBlogPosts = function () {
  listElement.innerHTML = "";
  userList.forEach((post) => {
    createPostElement(post);
  });
};

const sortButton = document.querySelector("button#sort");

sortButton.addEventListener("click", () => {
  userList.reverse();
  
  
  
  displayBlogPosts();


});

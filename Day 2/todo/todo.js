const taskList = ["old task 1", "old task 2"]; // maybe coming from a database
const tasksElement = document.getElementById("list");

const initList = function () {
  for (let taskIndex = 0; taskIndex < taskList.length; taskIndex++) {
    appendTaskElement(taskIndex);
  }
};

const appendTaskElement = function (index) {
  console.log("call with index ", index);

  const task = document.createElement("li");
  task.innerText = taskList[index];
  tasksElement.appendChild(task);
};

const addTask = function () {
  // alternative to select the input
  // const taskName = document.getElementsByTagName("input")[0].value;
  const taskName = document.querySelector('input[name="taskName"]').value;

  taskList.push(taskName);
  console.log(taskList);

  appendTaskElement(taskList.length - 1);
};

const button = document.querySelector("button");
// 2 alternatives
// button.addEventListener("click", addTask); // commented to avoid registering the same listener twice
button.addEventListener("click", function () {
  console.log("clicked");
  addTask();
});

initList();

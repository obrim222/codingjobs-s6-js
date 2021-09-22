const taskList = ["old task 1", "old task 2"];

const displayTasks = function () {
  const tasksElement = document.getElementById("list");

  tasksElement.innerHTML = "";

  for (let taskIndex = 0; taskIndex < taskList.length; taskIndex++) {
    const task = document.createElement("li");
    task.innerText = taskList[taskIndex];
    tasksElement.appendChild(task);
  }
};

displayTasks();

const addTask = function () {
  // const taskName = document.getElementsByTagName("input")[0].value;
  const taskName = document.querySelector('input[name="taskName"]').value;

  taskList.push(taskName);
  console.log(taskList);

  displayTasks();
};

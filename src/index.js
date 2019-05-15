document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //form and input fields
  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const newTaskPriority = document.getElementById("new-task-priority")

  //ul where new tasks live on DOM
  const newTaskUl = document.getElementById("tasks")
  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form trying to submit
  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask)
  event.target.reset()
}

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task)
}

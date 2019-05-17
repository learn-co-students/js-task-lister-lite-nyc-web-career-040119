const form = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const input = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = input.value;


  // EDIT BUTTON ////////////
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  newTask.appendChild(editBtn);

  editBtn.addEventListener("click", function (e) {
    editForm = document.createElement("form");

    editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = newTask.innerText.substr(0, newTask.innerText.indexOf('Edit'));

    updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";

    newTask.innerHTML = "";

    editForm.appendChild(editInput);
    editForm.appendChild(updateBtn);
    newTask.appendChild(editForm);

    updateBtn.addEventListener("click", function (e) {
      e.preventDefault();
      newTask.innerHTML = "";
      newTask.innerText = editInput.value;

      newTask.appendChild(editBtn);
      newTask.appendChild(delBtn);
    });
  });


  // DELETE BUTTON ////////////
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  newTask.appendChild(delBtn);

  delBtn.addEventListener("click", function (e) {
    newTask.remove();
  });

  const priority = document.querySelector("#new-task-priority");

  newTask.priority = priority.value;

  switch (newTask.priority) {
    case "high":
      newTask.style.color = "red";
      break;
    case "medium":
      newTask.style.color = "goldenrod";
      break;
    case "low":
      newTask.style.color = "green";
      break;
  }

  taskList.appendChild(newTask);


  // SORT BY PRIORITY
  const sortedTaskList = [...taskList.children];

  sortedTaskList.sort(function (a,b) {
      priorityArr = ["high", "medium", "low"];
      return priorityArr.indexOf(a.priority) - priorityArr.indexOf(b.priority);
  });

  for (const li of taskList.children) {
    li.remove();
  }

  sortedTaskList.forEach(function (li) {
    taskList.appendChild(li);
  });

  form.reset();
});

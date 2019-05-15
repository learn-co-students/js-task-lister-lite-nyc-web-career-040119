document.addEventListener("DOMContentLoaded", () => {

  // get what value is in the input
  const input = document.querySelector("#new-task-description");

  // find the form
  const form = document.querySelector("#create-task-form");

  // add an event "submit" on the form and define what will happen once it is submitted
  form.addEventListener("submit", function(e){
    e.preventDefault();

    // create <li> tag so I can add it to the page
    const task = document.createElement("li");
    task.innerText = input.value;
    console.log(task);

    // grab task list and add created <li> task
    const taskList = document.querySelector("#tasks");
    taskList.appendChild(task);

    // reset the form after it is submitted
    form.reset();
  });

  // grab delete button
  const deleteBtn = document.querySelector("#delete");

  // define what will happen when the delete button is clicked
  deleteBtn.addEventListener("click", function(){
    const taskList = document.querySelector("#tasks");
    if (taskList.hasChildNodes()){
      taskList.removeChild(taskList.childNodes[0])
    };

    // delete each <li> task
    const task = document.querySelector("li");
    task.parentNode.removeChild(task);
  });


});

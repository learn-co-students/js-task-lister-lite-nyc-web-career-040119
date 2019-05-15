console.log('%c beginning of page', 'color:goldenrod')
document.addEventListener("DOMContentLoaded", () => {
  console.log('%c dom is loaded', 'color:green');
  const input =
  document.querySelector("#new-task-description")
  // console.log(input)

  const form = document.querySelector("#create-task-form")
  // console.log(form)
  form.addEventListener("submit", function(){
    event.preventDefault()

    const task = document.createElement('li')
    task.innerText = input.value
    task.setAttribute("type", "text")

    // console.log(task)

    const editTask = document.createElement('button')
    editTask.innerText = "edit"
    editTask.addEventListener("click", editTask, false)
    task.appendChild(editTask)

    const deleteTask = document.createElement('button')
    deleteTask.className = "delete"
    deleteTask.innerText = "delete todo"
    deleteTask.addEventListener("click", deleteTodo, false);
    task.appendChild(deleteTask)

    const tasks = document.querySelector("#tasks")
    tasks.appendChild(task)
    form.reset()

    function deleteTodo() {
      this.parentNode.parentNode.removeChild(this.parentNode)
    }

    function editTask() {
      // this.parentNode.innerC
    }
  })
  //
  // const editButton = document.querySelectorAll("ul#tasks li button")
  //
  // console.log(editButton)
  // const li = document.querySelector("#tasks li")
  //

  // newTask.addEventListener('click')
  // const deleteInput = document.querySelector("#tasks ul li")
  // document.addEventListener

});


    // const deleteTask = document.createElement('button')
    // button.innerText = "delete";
    // document.body.appendChild(deleteTask)
    //
    //
    // const editTask = document.createElement('button')
    // button.innerText = "edit";
    // document.body.appendChild(editTask)

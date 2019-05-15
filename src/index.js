
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const input = document.querySelector('#new-task-description')

  form.addEventListener('submit', function(e){
    // prevents submission
    e.preventDefault()

    // TASK LIST
    const taskList = document.querySelector("#tasks")
    const taskValue = input.value

    // create new list items
    const taskItem = document.createElement('li')
    taskItem.className = "list-group-item w-100 d-flex align-items-center"
    taskItem.innerText = taskValue

    taskList.prepend(taskItem)

  // BONUS
  // - A delete function that will remove tasks from your list

    // DELETE
    const newButton = document.createElement("button")
    newButton.className = "ml-auto btn btn-sm btn-outline-success"
    newButton.innerText = "Done"
    // console.log("delete button: ", newButton)

    // Appending delete to the new task created
    taskItem.appendChild(newButton)

    // delete button event listener
    newButton.addEventListener("click", function(){
      taskItem.remove()
      console.log("Deleting: ", taskItem.innerText)
    })

  // - A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)

    // PRIORITY
    const priority = document.querySelector('#priority')

    // priority.options is an array of the selected options
    const dropdownValue = priority.options[priority.selectedIndex].value

    switch(dropdownValue){
      case "high":
        taskItem.style.backgroundColor = "red"
        break;
      case "medium":
        taskItem.style.backgroundColor = "yellow"
        break;
      case "low":
        taskItem.style.backgroundColor = "green"
        break;
    }

  //   - As a challenge, implement a sorting functionality that displays the tasks ASC/DESC based on priority


  // - An additional input field (e.g. user, duration, date due)


  // - Ability to edit tasks


  // - Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

    // resets form
    form.reset()
  })
});

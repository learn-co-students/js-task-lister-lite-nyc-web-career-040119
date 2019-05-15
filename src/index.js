
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  // console.log("form: ", form)

  const input = form.querySelector('#new-task-description')
  // console.log("form input: ", input)

  form.addEventListener('submit', function(e){
    // prevents submission
    e.preventDefault()
    // console.log('submit is being clicked')

    // TASK LIST
    // show tasks
    const taskShow = document.querySelector("#tasks")
    // console.log('task: ', taskShow)

    // create new list items
    const newLi = document.createElement('li')
    // console.log('new li: ', newLi)

    // add list item values
    const newTask = input.value
    // console.log('current input value: ', newTask)

    taskShow.append(newLi)

    // setting a key id for each task item
    // let i = Math.ceil(Math.random()*1000, 6)
    // newLi.id = newTask.slice(0,6) + '-' + i

    newLi.innerText = newTask

    console.log('task item: ', newLi)

  // BONUS
  // - A delete function that will remove tasks from your list
    const newButton = document.createElement("button")
    newButton.id = "delete"
    newButton.innerText = "x"
    console.log("delete button: ", newButton)
    newLi.appendChild(newButton)

    newButton.addEventListener("click", function(){
      newLi.remove()
      console.log("Deleting: ", newLi.innerText)
    })
  // - A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
  //   - As a challenge, implement a sorting functionality that displays the tasks ASC/DESC based on priority
  // - An additional input field (e.g. user, duration, date due)
  // - Ability to edit tasks
  // - Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

    // resets form
    form.reset()
  })
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  console.log("form: ", form)

  const input = form.querySelector('#new-task-description')
  console.log("form input: ", input)

  form.addEventListener('submit', function(e){
    // prevents submission
    e.preventDefault()
    console.log('submit is being clicked')

    // TASK LIST
    // show tasks
    const taskShow = document.querySelector("#tasks")
    console.log('task: ', taskShow)
    // create new list items
    const newLi = document.createElement('li')
    console.log('new li: ', newLi)
    // add list item values
    const newTask = input.value
    console.log('current input value: ', newTask)

    taskShow.append(newLi)
    newLi.innerText = newTask

  })

});

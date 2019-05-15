document.addEventListener("DOMContentLoaded", () => {

  const newTaskButton = document.querySelector("#submitTask")
  // console.log(newTaskButton)

  const input = document.querySelector("#taskInput")
  // console.log(input)

  const taskList = document.querySelector("#tasks")

  const priorityDropDown = document.querySelector("#priority-dropdown")

  const form = document.querySelector("#create-task-form")

  const taskUser = document.querySelector("#taskUser")

  // append child to taskList with the content of input when newTaskButton is clicked

  // delete function
  // add a button when task is created
  //  when clicked, this button should remove the element
  const items = []

  form.addEventListener("submit",function create(){
    event.preventDefault();

      // task to list
      const listItem = document.createElement("li")
      const newListItem = taskList.appendChild(listItem)
      newListItem.task = input.value
      newListItem.id = `${input.value}`
      newListItem.user = taskUser.value

      newListItem.innerHTML = `Task: <p>${newListItem.task}</p>\n User: ${newListItem.user}`

      // dropdown - sets className
      newListItem.priority = priorityDropDown.value
      switch (newListItem.priority) {
        case "1":
          newListItem.className = "low"
          break;
        case "2":
          newListItem.className = "medium"
          break;
        case "3":
          newListItem.className = "high"
          break;
        case "4":
          newListItem.className = "do-it-now"
          break;
      }


      // delete button
      const deleteButton = document.createElement("button")
      newListItem.appendChild(deleteButton)
      deleteButton.id = "delete-new-list-item"
      deleteButton.textContent = "DELETE"
      deleteButton.className = "button"

      // edit button

      const editButton = document.createElement("button")
      newListItem.appendChild(editButton)
      editButton.textContent = "EDIT"
      editButton.className = "button"

      editButton.addEventListener("click",function(){



        const editForm = document.createElement("input")

        newListItem.appendChild(editForm)
        editForm.type = "text"
        editForm.value = `${newListItem.task}`


        const editSubmit = document.createElement("input")
        newListItem.appendChild(editSubmit)
        editSubmit.type = "submit"
        editSubmit.value = "Confirm"


        editSubmit.addEventListener("click",function(){
          event.preventDefault()
          newListItem.task = editForm.value
          newListItem.innerText = `Task: ${newListItem.task}\n User: ${newListItem.user}`
          newListItem.appendChild(deleteButton)
          newListItem.appendChild(editButton)
        })
      })


      items.push(newListItem)


      // resets form after submission
      form.reset()



      // delete functionality
      deleteButton.addEventListener("click",()=>{
        taskList.removeChild(newListItem)
        const itemIndex = items.indexOf(newListItem)
        items.splice(itemIndex,1)
      })

      // sorting function
      let sortedItems = function(){
        items.sort(function(a,b){
	         return b.priority - a.priority
        })
      }

      sortedItems()

      // debugger
      function displaySortedEvents() {
        items.forEach(function(item){
          taskList.appendChild(item)
        })
      }

      displaySortedEvents()



  })
// end of submit listener
});
// end of DOMContentLoaded




document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // task inputing set up
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const taskUl = document.getElementById('tasks')

  form.addEventListener('submit', (sub) => {
    sub.preventDefault();

    //posting task on html
    const taskComment =document.createElement('li');
    const deleteButton = document.createElement('button');
    taskComment.innerText = input.value;


    //add delete botton and edit botton
    deleteButton.innerText = "delete"
    const editButton = document.createElement('button');
    editButton.innerText = 'edit'

    taskUl.appendChild(taskComment);
    taskComment.appendChild(deleteButton);


    const dropDown = document.querySelector('#piroity')
    var dropDownSelected = dropDown.options[dropDown.selectedIndex].value;
    if (dropDownSelected === "red") {

    }


      deleteButton.addEventListener('click', function (e) {
        taskComment.remove();

      editButton.addEventListener('click',  function (e) {
        taskComment.edit();
      })
      })
    form.reset;





  } )



})

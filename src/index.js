document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTask(event) {
    console.log('Preventing refresh');
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
    console.log(taskInput)

    // document.querySelector('#text').textContent = "new-task-description"

    const task = document.createElement("li");
    task.textContent = taskInput.value;
    taskList.appendChild(task);

    taskInput.value = ""; // Clear the input field
  }

  const form = document.getElementById("create-task-form");
  console.log(form)
  form.addEventListener("submit", addTask);
});



function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
  
  
  document.getElementById("taskList").appendChild(li);
  input.value = "Hello man";
}

function removeTask(button) {
  button.parentElement.remove();
}

  function validateForm(event) {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
      alert("Please verify you are not a robot.");
      event.preventDefault(); // Stop form from submitting
    }
  }


<form onsubmit="validateForm(event)">
  ...
</form>

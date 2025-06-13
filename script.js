// Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function:
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign an event listener to the remove button
            removeButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            // Append the remove button to li
            li.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Attach Event Listeners:

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

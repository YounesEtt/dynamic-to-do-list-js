// Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function:
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new li element and set its textContent
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function () {
                taskList.removeChild(li);
            };

            // Append remove button to li, and li to taskList
            li.appendChild(removeButton);
            taskList.appendChild(li);

            // Clear the input
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Attach Event Listeners:
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

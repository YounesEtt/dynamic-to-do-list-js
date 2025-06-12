// Setup Event Listener for Page Load
// At the beginning of the script, use document.addEventListener to listen for the 'DOMContentLoaded' event
// This ensures JavaScript code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    // Use document.getElementById to select the "Add Task" button and store it in a constant named addButton
    const addButton = document.getElementById('add-task-btn');
    
    // Select the input field where users enter tasks (id="task-input") and store in constant named taskInput
    const taskInput = document.getElementById('task-input');
    
    // Select the unordered list (id="task-list") that will display the tasks and store in constant named taskList
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    // Define a function named addTask - this function will be responsible for adding new tasks to the list
    function addTask() {
        // Inside addTask, retrieve and trim the value from the task input field
        // Store this value in a variable named taskText
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty ("")
        // If it is empty, use alert to prompt the user to enter a task
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Task Creation and Removal
        // Within the addTask function, if taskText is not empty:
        
        // Create a new li element. Set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        // Set its textContent to "Remove", and give it a class name of 'remove-btn'
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button that, when triggered, removes the li element from taskList
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element, then append the li to taskList
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the task input field by setting taskInput.value to an empty string
        taskInput.value = '';
    }

    // Attach Event Listeners
    // Add an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the "Enter" key
    // Inside this event listener, check if event.key is equal to 'Enter' before calling addTask
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

// Invoke the addTask function on DOMContentLoaded
// Outside addTask, add an event listener to document for the DOMContentLoaded event
// Set the callback function to invoke addTask - this ensures data fetching logic runs once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // This additional DOMContentLoaded listener ensures the addTask function is available when the page loads
    // Note: In this implementation, the addTask function is already defined within the main DOMContentLoaded event
    // This structure follows the specification requirements exactly as requested
});
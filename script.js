 // Setup Event Listener for Page Load
        document.addEventListener('DOMContentLoaded', function() {
            
            // Select DOM Elements
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            // In-memory storage array (simulates localStorage for this environment)
            // In a real environment, you would use localStorage instead
            let tasksArray = [];

            // Initialize and Load Tasks from Local Storage
            function loadTasks() {
                // In real implementation, use: const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // For this demo, we'll use the in-memory array
                const storedTasks = tasksArray.length > 0 ? tasksArray : [];
                
                // Clear existing task list to avoid duplicates
                taskList.innerHTML = '';
                
                // Load each task from storage
                storedTasks.forEach(taskText => {
                    addTaskToDOM(taskText); // Add to DOM without saving again
                });
            }

            // Function to add task to DOM only (used when loading from storage)
            function addTaskToDOM(taskText) {
                // Create a new li element and set its text content
                const li = document.createElement('li');
                li.textContent = taskText;

                // Create a new button element for removing the task
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.className = 'remove-btn';

                // Assign onclick event to remove button with Local Storage update
                removeButton.onclick = function() {
                    // Remove from DOM
                    taskList.removeChild(li);
                    
                    // Remove from storage
                    removeTaskFromStorage(taskText);
                };

                // Append the remove button to the li element
                li.appendChild(removeButton);
                
                // Append the li to taskList
                taskList.appendChild(li);
            }

            // Enhanced addTask Function with Local Storage support
            function addTask(taskText = null, save = true) {
                // Get task text from input if not provided
                if (taskText === null) {
                    taskText = taskInput.value.trim();
                }
                
                // Check if taskText is not empty
                if (taskText === "") {
                    alert("Please enter a task!");
                    return;
                }

                // Add task to DOM
                addTaskToDOM(taskText);

                // Save to Local Storage if requested
                if (save) {
                    saveTaskToStorage(taskText);
                }

                // Clear the task input field only when adding new task (not loading)
                if (taskInput.value.trim() !== '') {
                    taskInput.value = '';
                }
            }

            // Save task to Local Storage
            function saveTaskToStorage(taskText) {
                // In real implementation, use:
                // const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // storedTasks.push(taskText);
                // localStorage.setItem('tasks', JSON.stringify(storedTasks));
                
                // For this demo, use in-memory array
                tasksArray.push(taskText);
                console.log('Task saved:', taskText, 'Total tasks:', tasksArray.length);
            }

            // Remove task from Local Storage
            function removeTaskFromStorage(taskText) {
                // In real implementation, use:
                // let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // storedTasks = storedTasks.filter(task => task !== taskText);
                // localStorage.setItem('tasks', JSON.stringify(storedTasks));
                
                // For this demo, use in-memory array
                const index = tasksArray.indexOf(taskText);
                if (index > -1) {
                    tasksArray.splice(index, 1);
                }
                console.log('Task removed:', taskText, 'Remaining tasks:', tasksArray.length);
            }

            // Load tasks when page loads
            loadTasks();

            // Attach Event Listeners
            // Add event listener to addButton for click events
            addButton.addEventListener('click', function() {
                addTask(); // Call with default parameters (save = true)
            });

            // Add event listener to taskInput for Enter key press
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask(); // Call with default parameters (save = true)
                }
            });

            // Demo: Add some initial tasks to show persistence concept
            // In real usage, these would come from localStorage
            setTimeout(() => {
                if (tasksArray.length === 0) {
                    console.log('Adding demo tasks to show persistence...');
                    addTask('Complete JavaScript assignment', true);
                    addTask('Review Local Storage concepts', true);
                }
            }, 1000);
        });
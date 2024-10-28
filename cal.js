// Select elements from the DOM
const input = document.getElementById('input');
const button = document.getElementById('addButton');
const listContainer = document.getElementById('listcontainer');

// Function to add a task
function addTask() {
    const taskText = input.value.trim(); // Get the input value and trim whitespace
    if (taskText) { // Check if the input is not empty
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = taskText; // Set the text of the list item
        listItem.addEventListener('click', function() {
            listContainer.removeChild(listItem); // Remove the item when clicked
        });
        listContainer.appendChild(listItem); // Add the new item to the list
        input.value = ''; // Clear the input field
    }
}

// Add event listener to the button
button.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add tasks
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
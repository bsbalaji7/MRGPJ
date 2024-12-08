document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskItem);

    // Add event listeners for task completion and deletion
    taskItem.querySelector('.task-text').addEventListener('click', toggleCompletion);
    taskItem.querySelector('.delete-btn').addEventListener('click', deleteTask);

    taskInput.value = '';
}

function toggleCompletion(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}

// ==== Task CRUD Management ====

// Array to store tasks
let tasks = [];

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to view tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-task';
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}    

//Function to add a new task
function addTask(event) {
    event.preventDefault(); 
    const newTask = taskInput.value.trim();
    if (newTask) {
        tasks.push(newTask);
        taskInput.value = ''; 
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const updatedTask = prompt('Edit your task:',tasks[tasks[index]])
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        renderTasks();
    }
}

//Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

//Event Listeners
taskForm.addEventListener('submit', addTask);

//Initial render
renderTasks();
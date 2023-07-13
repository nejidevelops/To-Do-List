/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import { updateTaskStatus, clearCompletedTasks } from '../modules/taskStatus.js';
import './style.css';

let tasks = [];

function renderTasks() {
  const todoList = document.querySelector('.to-do');

  tasks.sort((a, b) => a.index - b.index);

  todoList.innerHTML = '';

  tasks.forEach((task, taskIndex) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      updateTaskStatus(tasks, taskIndex, checkbox.checked);
    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.contentEditable = true;
    taskDescription.addEventListener('input', () => {
      task.description = taskDescription.textContent.trim();
      saveTasks();
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
      deleteTask(task);
    });

    const hr = document.createElement('hr');

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);
    listItem.appendChild(deleteButton);
    todoList.appendChild(hr);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    todoList.appendChild(listItem);
  });
}

function addTask(taskDescription) {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasks();
}

function deleteTask(task) {
  const index = tasks.indexOf(task);

  if (index > -1) {
    tasks.splice(index, 1);
    updateTaskIndexes();
    saveTasks();
    renderTasks();
  }
}

function updateTaskIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');

  addButton.addEventListener('click', () => {
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      addTask(taskDescription);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      const taskDescription = taskInput.value.trim();

      if (taskDescription !== '') {
        addTask(taskDescription);
        taskInput.value = '';
      }
    }
  });

  removeAllTasks();
  removeCompletedTasks();
});

function removeAllTasks() {
  const deleteAll = document.querySelector('.refresh');

  deleteAll.addEventListener('click', () => {
    tasks = [];
    renderTasks();
    saveTasks();
  });
}

function removeCompletedTasks() {
  const removeCompleted = document.querySelector('.clear-complete-tasks');

  removeCompleted.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);
    updateTaskIndexes();
    renderTasks();
    saveTasks();
  });
}

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

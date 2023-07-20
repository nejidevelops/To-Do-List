/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import { updateTaskStatus, clearCompletedTasks } from '../modules/taskStatus.js';
// eslint-disable-next-line import/no-cycle
import { renderTasks } from './renderTask.js';
import './style.css';

let tasks = [];

function addTask(taskDescription) {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasks();
}

export function updateTaskIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);

  updateTaskIndexes();

  saveTasks();

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
    renderTasks(tasks);
    saveTasks();
  });
}

function removeCompletedTasks() {
  const removeCompleted = document.querySelector('.clear-complete-tasks');

  removeCompleted.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);
    updateTaskIndexes();
    renderTasks(tasks);
    saveTasks();
  });
}

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */

import { updateTaskStatus } from './updateTaskStatus.js';
// eslint-disable-next-line import/no-cycle
import { addTask } from './add-task.js';
import { renderTasks } from './renderTask.js';
import { removeCompletedTasks } from './clearall-checked.js';
import { updateTaskIndexes, saveTasks, clearCompletedTasks } from '../modules/taskStatus.js';

let tasks = JSON.parse(localStorage.getItem('To-Do List')) || [];

window.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);

  updateTaskIndexes();

  saveTasks();

  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');

  addButton.addEventListener('click', () => {
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      addTask(taskDescription, tasks);
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

function removeCompletedTasksfun() {
  removeCompletedTasks(tasks);
}

const removeCompleted = document.querySelector('.clear-complete-tasks');
if (removeCompleted) {
  removeCompleted.addEventListener('click', removeCompletedTasksfun);
}


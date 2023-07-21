import addTask from './add-task.js';
import renderTasks from './renderTask.js';
import removeCompletedTasks from './clearall-checked.js';
import saveTasks from '../modules/taskStatus.js';

let tasks = JSON.parse(localStorage.getItem('To-Do List')) || [];

function removeAllTasks() {
  const deleteAll = document.querySelector('.refresh');

  deleteAll.addEventListener('click', () => {
    tasks = [];
    renderTasks(tasks);
    saveTasks(tasks);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);

  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');

  addButton.addEventListener('click', () => {
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      tasks = addTask(taskDescription, tasks);
      renderTasks(tasks);
      saveTasks(tasks);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      const taskDescription = taskInput.value.trim();

      if (taskDescription !== '') {
        addTask(taskDescription, tasks);
        taskInput.value = '';
      }
    }
  });

  removeAllTasks();
  removeCompletedTasks();
});

function removeCompletedTasksfun() {
  tasks = removeCompletedTasks(tasks);
}

const removeCompleted = document.querySelector('.clear-complete-tasks');
if (removeCompleted) {
  removeCompleted.addEventListener('click', removeCompletedTasksfun);
}

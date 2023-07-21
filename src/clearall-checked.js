/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
// import { updateTaskIndexes } from './index.js';
import { renderTasks } from './renderTask.js';
import { saveTasks } from '../modules/taskStatus.js';

export function removeCompletedTasks(tasks) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => !task.completed);
  renderTasks(tasks);
  saveTasks(tasks);
  return tasks;
}
/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import { renderTasks } from './renderTask.js';

export function removeCompletedTasks(tasks) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
  return tasks;
}
/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { updateTaskIndexes, saveTasks } from './index.js';
import { renderTasks } from './renderTask.js';

export function deleteTask(task, tasks) {
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
}
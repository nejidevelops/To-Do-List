/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { updateTaskIndexes, saveTasks } from './index.js';
import { renderTasks } from './renderTask.js';

export function deleteTask(task, tasks) {
  const index = tasks.indexOf(task);

  if (index > -1) {
    tasks.splice(index, 1);
    updateTaskIndexes(tasks);
    saveTasks(tasks);
    renderTasks(tasks);
  }
}
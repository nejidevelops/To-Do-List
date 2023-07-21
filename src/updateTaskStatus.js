/* eslint-disable import/prefer-default-export */
import { saveTasks } from '../modules/taskStatus.js';

export function updateTaskStatus(tasks, taskIndex, completed) {
  tasks[taskIndex].completed = completed;
  saveTasks(tasks);
}
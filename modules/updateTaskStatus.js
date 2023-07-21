/* eslint-disable import/prefer-default-export */
import { saveTasks } from './taskStatus';

export function updateTaskStatus(tasks, taskIndex, completed) {
  tasks[taskIndex].completed = completed;
  saveTasks(tasks);
}
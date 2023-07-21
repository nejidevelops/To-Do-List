/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import { saveTasks } from '../modules/taskStatus.js';
import { renderTasks } from './renderTask.js';


export function addTask(taskDescription) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  renderTasks(tasks);
  saveTasks(tasks);
  return tasks;
}
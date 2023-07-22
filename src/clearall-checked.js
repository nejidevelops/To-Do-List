import renderTasks from './renderTask.js';
import saveTasks from '../modules/taskStatus.js';

export default function removeCompletedTasks(tasks) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => !task.completed);
  renderTasks(tasks);
  saveTasks(tasks);
  return tasks;
}
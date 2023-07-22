import saveTasks from '../modules/taskStatus.js';
import renderTasks from './renderTask.js';

export default function addTask(taskDescription) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  renderTasks(tasks);
  saveTasks(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
}
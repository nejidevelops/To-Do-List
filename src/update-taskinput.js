import saveTasks from '../modules/taskStatus.js';

export default function updateTaskDescription(tasks, taskIndex, description) {
  tasks[taskIndex].description = description.trim();
  saveTasks(tasks);
  return tasks;
}

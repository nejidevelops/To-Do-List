/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

export function clearCompletedTasks(tasks) {
  tasks = tasks.filter((task) => !task.completed);
  updateTaskIndexes(tasks);
  saveTasks(tasks);
}

export function updateTaskIndexes(tasks) {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

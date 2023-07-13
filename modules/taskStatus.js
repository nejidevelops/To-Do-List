/* eslint-disable no-use-before-define */
export function updateTaskStatus(tasks, taskIndex, completed) {
  tasks[taskIndex].completed = completed;
  saveTasks(tasks);
}

export function clearCompletedTasks(tasks) {
  tasks = tasks.filter((task) => !task.completed);
  updateTaskIndexes(tasks);
  saveTasks(tasks);
}

function updateTaskIndexes(tasks) {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default function updateTaskStatus(tasks, taskIndex, completed) {
  tasks[taskIndex].completed = completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
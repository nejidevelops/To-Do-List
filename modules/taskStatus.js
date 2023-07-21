export default function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

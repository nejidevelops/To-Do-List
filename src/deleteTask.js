export default function deleteTask(task, tasks) {
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
}
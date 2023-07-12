import './style.css';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

function renderTasks() {
  const todoList = document.querySelector('.to-do');

  tasks.sort((a, b) => a.index - b.index);

  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.description;
    if (task.completed) {
      listItem.classList.add('completed');
    }
    todoList.appendChild(listItem);
  });
}

renderTasks();

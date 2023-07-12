import './style.css';

let tasks = [];

function renderTasks() {
  const todoList = document.querySelector('.to-do');

  tasks.sort((a, b) => a.index - b.index);

  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.contentEditable = true;
    taskDescription.addEventListener('input', () => {
      task.description = taskDescription.textContent.trim();
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter((t) => t !== task);
      renderTasks();
    });

    const hr = document.createElement('hr');

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);
    listItem.appendChild(deleteButton);
    todoList.appendChild(hr);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    todoList.appendChild(listItem);
  });
}

renderTasks();

function addTask(event) {
  if (event) {
    event.preventDefault();
  }

  const taskInput = document.getElementById('task-input');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length + 1,
    };

    tasks.push(newTask);
    renderTasks();

    taskInput.value = '';
  }
}

addTask();

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');

  taskForm.addEventListener('submit', addTask);

  const taskInput = document.getElementById('task-input');
  taskInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      addTask(event);
    }
  });

  renderTasks();
});

function removeAllTasks() {
  const deleteAll = document.querySelector('.refresh');

  deleteAll.addEventListener('click', () => {
    tasks = [];
    renderTasks();
  });
}

removeAllTasks();

function removeCompletedTasks() {
  const removeCompleted = document.querySelector('.clear-complete-tasks');

  removeCompleted.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
  });
}

removeCompletedTasks();
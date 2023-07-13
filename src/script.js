/* eslint-disable no-use-before-define */
import './style.css';

let tasks = [];

const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
  tasks = JSON.parse(storedTasks);
}

function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateIndexes();
  saveTasks();
}

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

saveTasks();

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
      saveTasks();
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
      const index = tasks.indexOf(task);
      if (index > -1) {
        deleteTask(index);
        renderTasks();
      }
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

function addTaskHandler(event) {
  if (event) {
    event.preventDefault();
  }

  const taskInput = document.getElementById('task-input');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    addTask(taskDescription);
    renderTasks();

    taskInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');

  taskForm.addEventListener('submit', addTaskHandler);

  const taskInput = document.getElementById('task-input');
  taskInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      addTaskHandler(event);
    }
  });

  const deleteAll = document.querySelector('.refresh');
  deleteAll.addEventListener('click', () => {
    tasks = [];
    renderTasks();
  });

  const removeCompleted = document.querySelector('.clear-complete-tasks');
  removeCompleted.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
  });

  renderTasks();
});

/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { deleteTask } from './deleteTask.js';
import { updateTaskStatus } from './updateTaskStatus.js';
import { updateTaskDescription } from './update-taskinput.js';
import { saveTasks } from '../modules/taskStatus.js';

export function renderTasks(tasks) {
  const todoList = document.querySelector('.to-do');

  tasks.sort((a, b) => a.index - b.index);

  todoList.innerHTML = '';

  tasks.forEach((task, taskIndex) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      updateTaskStatus(tasks, taskIndex, checkbox.checked);
    });
    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.contentEditable = true;
    taskDescription.addEventListener('input', () => {
      updateTaskDescription(tasks, taskIndex, taskDescription.textContent);
    });
    task.index = taskIndex + 1;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
      deleteTask(task, tasks);
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

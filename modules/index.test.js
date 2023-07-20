/** @jest-environment jsdom */

import { addTask, deleteTask, renderTasks } from "../src/index.js";

describe('addTask', () => {
  test('add task description to array', () => {
    // Arrange
    const description = 'new task one';
    // Act
    addTask(description);
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Assert
    expect(tasks.length).toBe(1);

  });
  /*test('displaying the list in webpage', () => {
    // Arrange
    const temptasks = [];
    const description = 'new task one';
    document.body.innerHTML = + '<ul id="list">'
    + '</ul>';
    addTask(description, temptasks);
    
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(1);
  });*/
});
describe('delete task', () =>{
  test('delete task from array', () => {
    //const description = 'delete task';
    //addTask(description);
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    deleteTask(tasks);
    expect(tasks.length).toBe(0);
  });
});
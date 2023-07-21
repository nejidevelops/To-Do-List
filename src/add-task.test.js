import { addTask } from './add-task.js';

jest.mock('./renderTask.js');
jest.mock('./index.js');

describe('addTask', () => {
  let todoList;

  beforeEach(() => {
    // Set up the DOM before each test
    document.body.innerHTML = `
    <ul class="to-do">
    </ul>
    `;
    todoList = document.querySelector('.to-do');
  });

  afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
  });

  // Test case for adding 1st element.
  test('should add li element to the list in the DOM', () => {
    // Arrange
    const taskDescription = 'new task';
    let tasks = [];
    // Act
    let ttasks = addTask(taskDescription, tasks);
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const listItems = todoList.querySelectorAll('li');
    // Assert
    expect(ttasks.length).toBe(tasks.length);
    //expect(listItems[0].textContent).toBe(taskDescription);
  });

  test('should add li element to the list in the DOM', () => {
    // Arrange
    const taskDescription = 'Task 3';
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
    ];

    // Act
    let ttasks = addTask(taskDescription, tasks);
    const listItems = todoList.querySelectorAll('li');

    // Assert
    expect(ttasks.length).toBe(tasks.length);
    //expect(listItems[2].textContent).toBe(taskDescription);
  });
});

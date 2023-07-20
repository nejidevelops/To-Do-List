/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

import { removeCompletedTasks } from "./clearall-checked.js";

jest.mock('./renderTask.js');
jest.mock('./index.js');

describe('Clear all checked', () => {
    let todoList;
    beforeEach(() => {
        document.body.innerHTML = `
        <ul class='to-do'>
        </ul>
    `;
    todoList = document.querySelector('.to-do');
    });

    afterEach(() => {
        // Clean up the DOM after each test
        document.body.innerHTML = '';
      });

      test('clear checkbox checked true lists', () => {

        let tasks = [
            { description: 'Task 1', completed: false, index: 1 },
            { description: 'Task 2', completed: true, index: 2 },
            { description: 'Task 3', completed: false, index: 3 },
          ];
          localStorage.setItem('tasks', JSON.stringify(tasks));
          let uptasks = removeCompletedTasks(tasks);
          expect(uptasks.length).toBe(2);
      });

      test('clear checkbox checked true lists', () => {
        const tasks = [
            { description: 'Task 1', completed: false, index: 1 },
            { description: 'Task 2', completed: true, index: 2 },
            { description: 'Task 3', completed: true, index: 3 },
          ];
          localStorage.setItem('tasks', JSON.stringify(tasks));
          let uptasks = removeCompletedTasks(tasks);
          expect(uptasks.length).toBe(1);
      });

      test('clear checkbox checked true lists', () => {
        const tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
        let uptasks = removeCompletedTasks(tasks);
        expect(uptasks.length).toBe(0);
      });
});

/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

import { updateTaskDescription } from "./update-taskinput";

jest.mock('./renderTask.js');
jest.mock('./index.js');

describe('update input', () => {
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
    
    test('update the task input in local storage', () => {
        const tasks = [
            { description: 'Task 1', completed: false, index: 1 },
            { description: 'Task 2', completed: true, index: 2 },
            { description: 'Task 3', completed: false, index: 3 },
        ];
        let index = 2;
        let newdescription = 'Updated Task';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        const uptasks = updateTaskDescription(tasks, index, newdescription);
        expect(uptasks[index].description).toBe(newdescription);
    });

    test('update the task input in local storage', () => {
        const tasks = [
            { description: 'Task 1', completed: false, index: 1 },
            { description: 'Task 2', completed: true, index: 2 },
            { description: 'Task 3', completed: false, index: 3 },
        ];
        let index = 1;
        let newdescription = 'new Updated Task';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        const uptasks = updateTaskDescription(tasks, index, newdescription);
        expect(uptasks[index].description).toBe(newdescription);
    });
});
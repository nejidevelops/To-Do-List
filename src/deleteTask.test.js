/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import { deleteTask } from './deleteTask.js';
import { renderTasks } from './renderTask.js';
import * as indexModule from './index.js';

jest.mock('./index.js', () => ({
  ...jest.requireActual('./index.js'),
  updateTaskIndexes: jest.fn(),
  saveTasks: jest.fn(),
}));

jest.mock('./renderTask.js', () => ({
  renderTasks: jest.fn(),
}));

describe('deleteTask', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];
  });

  it('should be defined', () => {
    expect(deleteTask).toBeDefined();
  });

  it('should remove the specified task from the tasks array', () => {
    const taskToDelete = tasks[1];

    deleteTask(taskToDelete, tasks);

    expect(tasks.length).toBe(2);
    expect(tasks).not.toContain(taskToDelete);
  });

  it('should call updateTaskIndexes and saveTasks after deleting a task', () => {
    const taskToDelete = tasks[0];

    deleteTask(taskToDelete, tasks);

    expect(jest.spyOn(indexModule, 'updateTaskIndexes')).toHaveBeenCalled();
    expect(jest.spyOn(indexModule, 'saveTasks')).toHaveBeenCalled();
  });

  it('should call renderTasks after deleting a task', () => {
    const taskToDelete = tasks[2];

    deleteTask(taskToDelete, tasks);

    const renderTasksMock = jest.spyOn(
      require('./renderTask.js'),
      'renderTasks',
    );

    expect(renderTasksMock).toHaveBeenCalledWith(tasks);
  });
});

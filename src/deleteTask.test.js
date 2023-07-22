import deleteTask from './deleteTask.js';

jest.mock('../modules/taskStatus.js', () => ({
  ...jest.requireActual('../modules/taskStatus.js'),
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
  });

  it('should call renderTasks after deleting a task', () => {
    const taskToDelete = tasks[2];

    const newtasks = deleteTask(taskToDelete, tasks);

    expect(newtasks).toEqual(tasks);
  });
});

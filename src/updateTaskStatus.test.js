import { updateTaskStatus } from './updateTaskStatus.js';
import { saveTasks } from '../modules/taskStatus.js';

jest.mock('../modules/taskStatus.js', () => ({
  updateTaskIndexes: jest.fn(),
  saveTasks: jest.fn(),
}));

describe('updateTaskStatus', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];
  });

  it('should be defined', () => {
    expect(updateTaskStatus).toBeDefined();
  });

  it('should update the task status in the tasks array and call saveTasks', () => {
    const taskIndex = 1;
    const completed = true;

    updateTaskStatus(tasks, taskIndex, completed);

    expect(tasks[taskIndex].completed).toBe(completed);
    expect(saveTasks).toHaveBeenCalledWith(tasks);
  });
});

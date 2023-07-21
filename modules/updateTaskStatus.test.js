import { updateTaskStatus } from './updateTaskStatus';

describe('updateTaskStatus()', () => {
  test('Update task status to completed', () => {
    const tasks = [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
    ];
    const taskIndex = 1;
    const completed = true;

    updateTaskStatus(tasks, taskIndex, completed);

    expect(tasks[taskIndex].completed).toBe(completed);
  });
  test('Update task status to not completed', () => {
    const tasks = [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: true },
    ];
    const taskIndex = 2;
    const completed = false;

    updateTaskStatus(tasks, taskIndex, completed);

    expect(tasks[taskIndex].completed).toBe(completed);
  });
});
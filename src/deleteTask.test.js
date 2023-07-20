import { deleteTask } from './deleteTask.js';

jest.mock('./renderTask.js');

describe('deleteTask', () => {
  it('should be defined', () => {
    expect(deleteTask).toBeDefined();
  });
});
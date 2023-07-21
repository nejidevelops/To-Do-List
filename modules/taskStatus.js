/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

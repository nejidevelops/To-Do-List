/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/taskStatus.js":
/*!*******************************!*\
  !*** ./modules/taskStatus.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   updateTaskStatus: () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\n/* eslint-disable no-use-before-define */\nfunction updateTaskStatus(tasks, taskIndex, completed) {\n  tasks[taskIndex].completed = completed;\n  saveTasks(tasks);\n}\n\nfunction clearCompletedTasks(tasks) {\n  tasks = tasks.filter((task) => !task.completed);\n  updateTaskIndexes(tasks);\n  saveTasks(tasks);\n}\n\nfunction updateTaskIndexes(tasks) {\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n}\n\nfunction saveTasks(tasks) {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\n\n//# sourceURL=webpack://to-do-list/./modules/taskStatus.js?");

/***/ }),

/***/ "./src/add-task.js":
/*!*************************!*\
  !*** ./src/add-task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _renderTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask.js */ \"./src/renderTask.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable import/named */\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-undef */\n\n\n\n\nfunction addTask(taskDescription, tasks) {\n  const newTask = {\n    description: taskDescription,\n    completed: false,\n    index: tasks.length + 1,\n  };\n\n  tasks.push(newTask);\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();\n  (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(tasks);\n}\n\n//# sourceURL=webpack://to-do-list/./src/add-task.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _renderTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask.js */ \"./src/renderTask.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable import/named */\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-undef */\n\n\n\nfunction deleteTask(task, tasks) {\n  const index = tasks.indexOf(task);\n\n  if (index > -1) {\n    tasks.splice(index, 1);\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskIndexes)(tasks);\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);\n    (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(tasks);\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/deleteTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks),\n/* harmony export */   updateTaskIndexes: () => (/* binding */ updateTaskIndexes)\n/* harmony export */ });\n/* harmony import */ var _modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/taskStatus.js */ \"./modules/taskStatus.js\");\n/* harmony import */ var _add_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-task.js */ \"./src/add-task.js\");\n/* harmony import */ var _renderTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTask.js */ \"./src/renderTask.js\");\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-unused-vars */\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-use-before-define */\n/* eslint-disable import/no-cycle */\n\n\n// eslint-disable-next-line import/no-cycle\n\n\n\nlet tasks = [];\n\nfunction updateTaskIndexes() {\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n}\n\nfunction saveTasks() {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(tasks);\n\n  updateTaskIndexes();\n\n  saveTasks();\n\n  const taskInput = document.getElementById('task-input');\n  const addButton = document.getElementById('add-button');\n\n  addButton.addEventListener('click', () => {\n    const taskDescription = taskInput.value.trim();\n\n    if (taskDescription !== '') {\n      (0,_add_task_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskDescription, tasks);\n      taskInput.value = '';\n    }\n  });\n\n  taskInput.addEventListener('keydown', (event) => {\n    if (event.keyCode === 13) {\n      const taskDescription = taskInput.value.trim();\n\n      if (taskDescription !== '') {\n        (0,_add_task_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskDescription);\n        taskInput.value = '';\n      }\n    }\n  });\n\n  removeAllTasks();\n  removeCompletedTasks();\n});\n\nfunction removeAllTasks() {\n  const deleteAll = document.querySelector('.refresh');\n\n  deleteAll.addEventListener('click', () => {\n    tasks = [];\n    (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(tasks);\n    saveTasks();\n  });\n}\n\nfunction removeCompletedTasks() {\n  const removeCompleted = document.querySelector('.clear-complete-tasks');\n\n  removeCompleted.addEventListener('click', () => {\n    tasks = tasks.filter((task) => !task.completed);\n    updateTaskIndexes();\n    (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(tasks);\n    saveTasks();\n  });\n}\n\nif (localStorage.getItem('tasks')) {\n  tasks = JSON.parse(localStorage.getItem('tasks'));\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/renderTask.js":
/*!***************************!*\
  !*** ./src/renderTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask.js */ \"./src/deleteTask.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/taskStatus.js */ \"./modules/taskStatus.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-undef */\n\n\n\n\nfunction renderTasks(tasks) {\n  const todoList = document.querySelector('.to-do');\n\n  tasks.sort((a, b) => a.index - b.index);\n\n  todoList.innerHTML = '';\n\n  tasks.forEach((task, taskIndex) => {\n    const listItem = document.createElement('li');\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.checked = task.completed;\n    checkbox.addEventListener('change', () => {\n      (0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__.updateTaskStatus)(tasks, taskIndex, checkbox.checked);\n    });\n\n    const taskDescription = document.createElement('span');\n    taskDescription.textContent = task.description;\n    taskDescription.contentEditable = true;\n    taskDescription.addEventListener('input', () => {\n      task.description = taskDescription.textContent.trim();\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)();\n    });\n\n    const deleteButton = document.createElement('button');\n    deleteButton.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\n    deleteButton.addEventListener('click', () => {\n      (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task, tasks);\n    });\n\n    const hr = document.createElement('hr');\n\n    listItem.appendChild(checkbox);\n    listItem.appendChild(taskDescription);\n    listItem.appendChild(deleteButton);\n    todoList.appendChild(hr);\n\n    if (task.completed) {\n      listItem.classList.add('completed');\n    }\n\n    todoList.appendChild(listItem);\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/renderTask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
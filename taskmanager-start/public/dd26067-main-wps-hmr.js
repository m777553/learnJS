webpackHotUpdate("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu.js */ "./src/view/site-menu.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/board.js */ "./src/view/board.js");
/* harmony import */ var _view_task_edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/task-edit.js */ "./src/view/task-edit.js");
/* harmony import */ var _view_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/task.js */ "./src/view/task.js");
/* harmony import */ var _view_load_btn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/load-btn.js */ "./src/view/load-btn.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _mock_task_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/task.js */ "./src/mock/task.js");














// mock генерации данных фильтра


//mock генерация данных задачи


const TASKS_COUNT = 3;

// Функция принимает контейнер для вставки, разметку в виде строки  и положение
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElem = document.querySelector(`.main`);

const siteMenuElem = siteMainElem.querySelector(`.main__control`);

render(siteMenuElem, Object(_view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["createSiteMenuTemplate"])(), `beforeend`);


const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_6__["generateFilters"])();
const tasks = Object(_mock_task_js__WEBPACK_IMPORTED_MODULE_7__["generateTasks"])(TASKS_COUNT);


render(siteMainElem, Object(_view_filter_js__WEBPACK_IMPORTED_MODULE_1__["createSiteFilterTemplate"])(filters), `beforeend`);
render(siteMainElem, Object(_view_board_js__WEBPACK_IMPORTED_MODULE_2__["createSiteBoardContainerTemplate"])(), `beforeend`);

const boardContainer = siteMainElem.querySelector(`.board`);

// render(boardContainer, createSiteSortTemplate() ,`afterbegin`);

const tasksContainer = boardContainer.querySelector(`.board__tasks`);

for (let i = 1; i < tasks.length; i++) {
  render(tasksContainer, Object(_view_task_js__WEBPACK_IMPORTED_MODULE_4__["createSiteCardTemplate"])(tasks[i]), `afterbegin`);
}


render(tasksContainer, Object(_view_task_edit_js__WEBPACK_IMPORTED_MODULE_3__["createSiteTaskFormEditTemplate"])(tasks[0]), `afterbegin`);

render(boardContainer, Object(_view_load_btn_js__WEBPACK_IMPORTED_MODULE_5__["createSiteLoadBtnTemplate"])(), `beforeend`);


/***/ }),

/***/ "./src/mock/task.js":
/*!**************************!*\
  !*** ./src/mock/task.js ***!
  \**************************/
/*! exports provided: generateTask, generateTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTask", function() { return generateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTasks", function() { return generateTasks; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ];

  const getRandomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[getRandomIndex];
};

const generateColor = () => {
  const colors = [`black`, `green`, `pink`, `orange`, `yellow`, `blue`, `red`];
  const getRandomIndex = getRandomInteger(0, colors.length - 1);
  return colors[getRandomIndex];
};

const generateDate = () => {
  const isDate = Boolean(getRandomInteger());

  if (!isDate) {
    return null;
  }
  const maxDateGap = 7;
  const daysGap = getRandomInteger(-maxDateGap, maxDateGap);

  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateRepeatingDays = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false
  };
};

const generateTask = () => {
  const dueDate = dueDate();
  const repeatingDays = dueDate === null ? generateRepeatingDays() : {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false
  };

  return {
    description: generateDescription(),
    dueDate,
    repeatingDays,
    color: generateColor(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isArchive: Boolean(getRandomInteger(0, 1)),
  };
};

const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};


/***/ })

})
//# sourceMappingURL=dd26067-main-wps-hmr.js.map
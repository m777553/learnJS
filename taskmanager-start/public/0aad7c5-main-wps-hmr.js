webpackHotUpdate("main",{

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
  const dueDate = generateDate();
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
//# sourceMappingURL=0aad7c5-main-wps-hmr.js.map
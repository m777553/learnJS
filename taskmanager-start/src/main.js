// import {
//   createSiteMenuTemplate
// } from "./view/site-menu.js";


import FilterMenu from "./view/filter.js";

import SiteMenu from "./view/site-menu.js";

import Board from "./view/board.js";

import TaskEdit from "./view/task-edit.js";

import Task from "./view/task.js";

import Sort from "./view/sort.js";

import TasksBoard from "./view/tasks_board.js";

import LoadMoreButton from "./view/load-btn.js";

// mock генерации данных фильтра
import {
  generateFilter
} from "./mock/filter.js";

// mock генерация данных задачи
import {
  generateTasks
} from "./mock/task.js";

import {
  renderTemplate as render,
  renderPosition,
  renderElement
} from "./utils.js";

const TASK_COUNT_PER_STEP = 8;
const MAX_TASKS_COUNT = 22;

// // Функция принимает контейнер для вставки, разметку в виде строки  и положение
// const render = (container, template, place) => {
// 	container.insertAdjacentHTML(place, template);
// };

const siteMainElem = document.querySelector(`.main`);

const siteMenuElem = siteMainElem.querySelector(`.main__control`);

renderElement(siteMenuElem, new SiteMenu().getElement(), renderPosition.BEFOREEND);

// Это моковые данные, которые пошли в разметку
const tasks = generateTasks(MAX_TASKS_COUNT);
const filters = generateFilter(tasks);

renderElement(siteMainElem, new FilterMenu(filters).getElement(), renderPosition.BEFOREEND);


renderElement(siteMainElem, new Board().getElement(), renderPosition.BEFOREEND);

const boardContainer = siteMainElem.querySelector(`.board`);

renderElement(boardContainer, new Sort().getElement() ,renderPosition.BEFOREEND);

renderElement(boardContainer, new TasksBoard().getElement(), renderPosition.BEFOREEND);

const tasksContainer = boardContainer.querySelector(`.board__tasks`);

// Рендерим карточки задач
// Ограничим первую отрисовку по минимальному количеству, чтобы не пытаться рисовать 8 задач, если всего 5
for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
  renderElement(tasksContainer, new Task(tasks[i]).getElement(), renderPosition.BEFOREEND);
}


renderElement(tasksContainer, new TaskEdit(tasks[0]).getElement(), renderPosition.AFTERBEGIN);


// Отобразим кнопку LOAD MORE, если общее количество задач больше
if (tasks.length >= TASK_COUNT_PER_STEP) {

  // Заведем счетчик показанных задач
  let renderTaskCount = TASK_COUNT_PER_STEP;


  renderElement(boardContainer, new LoadMoreButton().getElement(), renderPosition.BEFOREEND);

  const loadMoreButton = boardContainer.querySelector(`.load-more`);

  // Добавим обработчик на кнопку LOAD MORE
  // По клику будем допоказывать задачи, опираясь на счётчик
  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    tasks.slice(renderTaskCount, renderTaskCount + TASK_COUNT_PER_STEP).forEach((task) => {
      renderElement(tasksContainer, new Task(task).getElement(), renderPosition.BEFOREEND);
    });
    renderTaskCount += TASK_COUNT_PER_STEP;

    if (renderTaskCount >= tasks.length) {
      loadMoreButton.remove();
    }


  });
}

import {
	createSiteMenuTemplate
} from "./view/site-menu.js";


import {
	createSiteFilterTemplate
} from "./view/filter.js";

import {
	createSiteBoardContainerTemplate
} from "./view/board.js";

import {
	createSiteTaskFormEditTemplate
} from "./view/task-edit.js";

import {
	createSiteCardTemplate
} from "./view/task.js";

import {
	createSiteLoadBtnTemplate
} from "./view/load-btn.js";

// mock генерации данных фильтра
import {
	generateFilter
} from "./mock/filter.js";

// mock генерация данных задачи
import {
	generateTasks
} from "./mock/task.js";

const TASK_COUNT_PER_STEP = 8;
const MAX_TASKS_COUNT = 22;

// Функция принимает контейнер для вставки, разметку в виде строки  и положение
const render = (container, template, place) => {
	container.insertAdjacentHTML(place, template);
};

const siteMainElem = document.querySelector(`.main`);

const siteMenuElem = siteMainElem.querySelector(`.main__control`);

render(siteMenuElem, createSiteMenuTemplate(), `beforeend`);


const tasks = generateTasks(MAX_TASKS_COUNT);
const filters = generateFilter(tasks);

render(siteMainElem, createSiteFilterTemplate(filters), `beforeend`);
render(siteMainElem, createSiteBoardContainerTemplate(), `beforeend`);

const boardContainer = siteMainElem.querySelector(`.board`);

// render(boardContainer, createSiteSortTemplate() ,`afterbegin`);

const tasksContainer = boardContainer.querySelector(`.board__tasks`);

// Рендерим карточки задач
// Ограничим первую отрисовку по минимальному количеству, чтобы не пытаться рисовать 8 задач, если всего 5
for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
	render(tasksContainer, createSiteCardTemplate(tasks[i]), `beforeend`);
}


render(tasksContainer, createSiteTaskFormEditTemplate(tasks[0]), `afterbegin`);


// Отобразим кнопку LOAD MORE, если общее количество задач больше
if (tasks.length >= TASK_COUNT_PER_STEP) {

	// Заведем счетчик показанных задач
	let renderTaskCount = TASK_COUNT_PER_STEP;


	render(boardContainer, createSiteLoadBtnTemplate(), `beforeend`);
	const loadMoreButton = boardContainer.querySelector(`.load-more`);

	// Добавим обработчик на кнопку LOAD MORE
	// По клику будем допоказывать задачи, опираясь на счётчик
	loadMoreButton.addEventListener(`click`, (evt) => {
		evt.preventDefault();
		tasks.slice(renderTaskCount, renderTaskCount + TASK_COUNT_PER_STEP).forEach((task) => {
			render(tasksContainer, createSiteCardTemplate(task), `beforeend`);
		});
		renderTaskCount += TASK_COUNT_PER_STEP;

		if (renderTaskCount >= tasks.length) {
			console.log(renderTaskCount);
			console.log(tasks.length);
			loadMoreButton.remove();
		}




	});
}

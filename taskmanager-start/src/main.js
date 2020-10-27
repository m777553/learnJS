'use strict';
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

//mock генерации данных фильтра
import {
	generateFilters
} from "./mock/filter.js";


const TASKS_COUNT = 3;

//Функция принимает контейнер для вставки, разметку в виде строки  и положение
const render = (container, template, place) => {
	container.insertAdjacentHTML(place, template);
};

const siteMainElem = document.querySelector(`.main`);

const siteMenuElem = siteMainElem.querySelector(`.main__control`);

render(siteMenuElem, createSiteMenuTemplate(), `beforeend`);



const filters = generateFilters();
const tasks = generateTasks(TASKS_COUNT);


render(siteMainElem, createSiteFilterTemplate(filters), `beforeend`);
render(siteMainElem, createSiteBoardContainerTemplate(), `beforeend`);

const boardContainer = siteMainElem.querySelector('.board');

// render(boardContainer, createSiteSortTemplate() ,`afterbegin`);

const tasksContainer = boardContainer.querySelector('.board__tasks');

for (let i = 1; i < tasks.length; i++) {
	render(tasksContainer, createSiteCardTemplate(tasks[i]), `afterbegin`);
}


render(tasksContainer, createSiteTaskFormEditTemplate(tasks[0]), `afterbegin`);

render(boardContainer, createSiteLoadBtnTemplate(), `beforeend`);

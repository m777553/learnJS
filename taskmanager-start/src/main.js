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

const TASKS_CONT = 3;

//Функция принимает контейнер для вставки, разметку в виде строки  и положение
const render = (container, template, place) => {
	container.insertAdjacentHTML(place, template);
};

const siteMainElem = document.querySelector(`.main`);

const siteMenuElem = siteMainElem.querySelector(`.main__control`);

render(siteMenuElem, createSiteMenuTemplate(), `beforeend`);

render(siteMainElem, createSiteFilterTemplate(), `beforeend`);
render(siteMainElem, createSiteBoardContainerTemplate(), `beforeend`);

const boardContainer = siteMainElem.querySelector('.board');

// render(boardContainer, createSiteSortTemplate() ,`afterbegin`);

const tasksContainer = boardContainer.querySelector('.board__tasks');

for (let i = 0; i < TASKS_CONT; i++) {
	render(tasksContainer, createSiteCardTemplate(), `afterbegin`);
}


render(tasksContainer, createSiteTaskFormEditTemplate(), `afterbegin`);

render(boardContainer, createSiteLoadBtnTemplate(), `beforeend`);

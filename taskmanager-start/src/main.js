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

import NoTasksBoard from "./view/no_tasks.js";

// mock генерации данных фильтра
import {
	generateFilter
} from "./mock/filter.js";

// mock генерация данных задачи
import {
	generateTasks
} from "./mock/task.js";

import {

	renderPosition,
	renderElement
} from "./utils.js";

const TASK_COUNT_PER_STEP = 8;
const MAX_TASKS_COUNT = 2;

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

const boardContainer = new Board();
renderElement(siteMainElem, boardContainer.getElement(), renderPosition.BEFOREEND);

//const boardContainer = siteMainElem.querySelector(`.board`);









if (tasks.every((task) => task.isArchive)) {
	renderElement(boardContainer.getElement(), new NoTasksBoard().getElement(), renderPosition.BEFOREEND);
} else



{
	renderElement(boardContainer.getElement(), new Sort().getElement(), renderPosition.BEFOREEND);


	const tasksContainer = new TasksBoard();
	renderElement(boardContainer.getElement(), tasksContainer.getElement(), renderPosition.BEFOREEND);

	// const tasksContainer = boardContainer.getElement().querySelector(`.board__tasks`);

	const renderTask = (container, task) => {
		const taskComponent = new Task(task);
		const taskEditComponent = new TaskEdit(task);

		//функции по замене элементов
		const replaceCardToForm = () => {
			//где меняем->на что меняем->что меняем
			container.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
		};

		const replaceFormToCard = () => {
			container.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
		};

		//Объявим обработчик клавиши Esc, который будет закрывать форму
		const onEscPress = (evt) => {
			if (evt.key === `Escape` || evt.key === `Esc`) {
				evt.preventDefault();
				replaceFormToCard();
				document.removeEventListener(`keydown`, onEscPress);
			}
		};

		//обработчики клика и отправки
		const onEditBtnClick = (evt) => {
			evt.preventDefault();
			replaceCardToForm();
			document.addEventListener(`keydown`, onEscPress);
		};

		const onSubmitBtnClick = (evt) => {
			evt.preventDefault();
			replaceFormToCard();
			document.removeEventListener(`keydown`, onEscPress);
		};


		//обработчик клика
		taskComponent.getElement().querySelector('.card__btn--edit').addEventListener(`click`, onEditBtnClick);

		taskEditComponent.getElement().querySelector('.card__form').addEventListener(`submit`, onSubmitBtnClick);



		renderElement(tasksContainer.getElement(), taskComponent.getElement(), renderPosition.BEFOREEND);
	};

	// Рендерим карточки задач
	// Ограничим первую отрисовку по минимальному количеству, чтобы не пытаться рисовать 8 задач, если всего 5
	for (let i = 0; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
		renderTask(tasksContainer.getElement(), tasks[i]);
	}
}









// Отобразим кнопку LOAD MORE, если общее количество задач больше
if (tasks.length >= TASK_COUNT_PER_STEP) {

	// Заведем счетчик показанных задач
	let renderTaskCount = TASK_COUNT_PER_STEP;


	renderElement(boardContainer.getElement(), new LoadMoreButton().getElement(), renderPosition.BEFOREEND);

	const loadMoreButton = boardContainer.getElement().querySelector(`.load-more`);

	// Добавим обработчик на кнопку LOAD MORE
	// По клику будем допоказывать задачи, опираясь на счётчик
	loadMoreButton.addEventListener(`click`, (evt) => {
		evt.preventDefault();
		tasks.slice(renderTaskCount, renderTaskCount + TASK_COUNT_PER_STEP).forEach((task) => {
			renderTask(tasksContainer.getElement(), task);
		});
		renderTaskCount += TASK_COUNT_PER_STEP;

		if (renderTaskCount >= tasks.length) {
			loadMoreButton.remove();
		}


	});
}

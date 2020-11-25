import Board from "../view/board.js";

import Sort from "../view/sort.js";

import TasksBoard from "../view/tasks_board.js";

import LoadMoreButton from "../view/load-btn.js";

import NoTasksBoard from "../view/no_tasks.js";

import TaskEdit from "../view/task-edit.js";

import Task from "../view/task.js";


import {
	renderPosition,
	render,
	replace,
	remove
} from "../utils/render.js";


import {
	sortTaskUp,
	sortTaskDown
} from "../utils/task.js";

import {
	SortType
} from "../const.js";

const TASK_COUNT_PER_STEP = 8;
// const MAX_TASKS_COUNT = 0;


export default class BoardPresenter {
	constructor(boardContainer) {
		this._boardContainer = boardContainer;
		this._renderTaskCountPerStep = TASK_COUNT_PER_STEP;
		this._currentSort = SortType.DEFAULT;

		this._boardComponent = new Board();
		this._sortComponent = new Sort();
		this._taskListComponent = new TasksBoard();
		this._noTaskComponent = new NoTasksBoard();
		this._loadMoreButton = new LoadMoreButton();

		//Обработчик клика вынесем в отдельный метод. Метод bind закрепляет объект за данной функцией, тк стрелочная функция теряет окружение
		this._onLoadMoreBtnClick = this._onLoadMoreBtnClick.bind(this);
		this._onSortTypeChange = this._onSortTypeChange.bind(this);
	}


	// Метод для инициализации (начала работы) модуля,
	// малая часть текущей функции renderBoard в main.js
	// Сразу создаёт ЗАДАЧИ , отрисовывает ДОСКУ и ДОСКУ ЗАДАЧ и запускает логику работы ДОСКИ
	init(boardTasks) {
		this._boardTasks = boardTasks.slice();
		this._boardTasksSortDefault = boardTasks.slice();

		render(this._boardContainer, this._boardComponent, renderPosition.BEFOREEND);

		render(this._boardComponent, this._taskListComponent, renderPosition.BEFOREEND);

		this._renderBoard();
	}

	_sortTasks(sortType) {
		switch (sortType) {
      case SortType.DATE_UP:
        this._boardTasks.sort(sortTaskUp);
        break;
      case SortType.DATE_DOWN:
        this._boardTasks.sort(sortTaskDown);
        break;
				//А когда пользователь захочет "вернуть всё, как было",
	        // мы просто запишем в _boardTasks исходный массив
      default:
        this._boardTasks = this._boardTasksSortDefault.slice();
    }
		this._currentSortType = sortType;
	}

	_clearTaskList(){
		this._taskListComponent.getElement().innerHTML = ``;
    this._renderedTaskCount = TASK_COUNT_PER_STEP;
	}


	//обработчик смены сортировки
	_onSortTypeChange(sortType) {
		// - Сортируем задачи
		if (this._currentSortType === sortType) {
      return;
    }

    this._sortTasks(sortType);
		// - Очищаем список
		this._clearTaskList();
		// - Рендерим список заново
		this._renderTaskList();
	}
	// Метод для рендеринга сортировки
	_renderSort() {

		render(this._boardComponent, this._sortComponent, renderPosition.AFTERBEGIN);
		this._sortComponent.setSortTypeChange(this._onSortTypeChange);
	}


	_onLoadMoreBtnClick() {
		// evt.preventDefault();
		this._renderTasks(this._renderTaskCountPerStep, this._renderTaskCountPerStep + TASK_COUNT_PER_STEP);

		this._renderTaskCountPerStep += TASK_COUNT_PER_STEP;

		if (this._renderTaskCountPerStep >= this._boardTasks.length) {
			remove(this._loadMoreButton);
		}
	}

	// Метод, куда уйдёт логика созданию и рендерингу компонетов задачи,
	// текущая функция renderTask в main.js
	_renderTask(task) {

		const taskComponent = new Task(task);
		const taskEditComponent = new TaskEdit(task);

		// функции по замене элементов
		const replaceCardToForm = () => {
			// где меняем->на что меняем->что меняем
			replace(taskEditComponent, taskComponent);
		};

		const replaceFormToCard = () => {
			replace(taskComponent, taskEditComponent);
		};

		// Объявим обработчик клавиши Esc, который будет закрывать форму
		const onEscPress = (evt) => {
			if (evt.key === `Escape` || evt.key === `Esc`) {
				evt.preventDefault();
				replaceFormToCard();
				document.removeEventListener(`keydown`, onEscPress);
			}
		};

		// обработчики клика и отправки
		const onEditBtnClick = () => {
			// evt.preventDefault();
			replaceCardToForm();
			document.addEventListener(`keydown`, onEscPress);
		};

		const onSubmitBtnClick = () => {
			// evt.preventDefault();
			replaceFormToCard();
			document.removeEventListener(`keydown`, onEscPress);
		};


		// обработчик клика
		taskComponent.setEditBtnClickHandler(onEditBtnClick);

		taskEditComponent.setSubmitHandler(onSubmitBtnClick);


		render(this._taskListComponent, taskComponent, renderPosition.BEFOREEND);


	}

	// Метод для рендеринга N-задач за раз
	_renderTasks(from, to) {
		this._boardTasks.slice(from, to).forEach((task) => {
			this._renderTask(task);
		});
	}
	// Метод для рендеринга заглушки
	_renderNoTasks() {
		render(this._boardComponent, this._noTaskComponent, renderPosition.AFTERBEGIN);
	}

	// Метод, куда уйдёт логика по отрисовке компонетов задачи,
	// текущая функция renderTask в main.js
	_renderLoadMoreButton() {
		// Заведем счетчик показанных задач
		//let renderTaskCount = this._renderTaskCountPerStep;

		//const loadMoreButton = new LoadMoreButton();
		render(this._boardComponent, this._loadMoreButton, renderPosition.BEFOREEND);



		this._loadMoreButton.setClickHandler(this._onLoadMoreBtnClick);

	}

	// Выделяем в презентере рендеринг списка
	_renderTaskList() {
		this._renderTasks(0, Math.min(this._boardTasks.length, this._renderTaskCountPerStep));

		if (this._boardTasks.length > this._renderTaskCountPerStep) {
			this._renderLoadMoreButton();
		}
	}
	// Метод для инициализации (начала работы) модуля,
	// бОльшая часть текущей функции renderBoard в main.js
	_renderBoard() {
		// Метод заканчивает работу, если нет задач или все в архива
		if (this._boardTasks.every((boardTask) => boardTask.isArchive)) {
			this._renderNoTasks();
			return;
		}
		this._renderSort();
		this._renderTaskList();
	}
}

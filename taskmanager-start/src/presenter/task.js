import TaskEdit from "../view/task-edit.js";

import Task from "../view/task.js";

import {
	renderPosition,
	render,
	replace,
	remove
} from "../utils/render.js";

export default class TaskPresenter {
	constructor(taskListContainer) {
		this._taskListContainer = taskListContainer;

		this._task = null;
		this._taskEdit = null;


		this._onEscPress = this._onEscPress.bind(this);
		this._onEditBtnClick = this._onEditBtnClick.bind(this);
		this._onSubmitBtnClick = this._onSubmitBtnClick.bind(this);
	}
	init(task) {
		this._task = task;
		this._task = new Task(task);
		this._taskEdit = new TaskEdit(task);

		// обработчик клика
		this._task.setEditBtnClickHandler(this._onEditBtnClick);
		this._taskEdit.setSubmitHandler(this._onSubmitBtnClick);
		// Добавим возможность повторно инициализировать презентер задачи. Для этого в методе init будем запоминать предыдущие компоненты.

		const prevTask = this._task;
		const prevTaskEdit = this._taskEdit;
		// Если они null, то есть не создавались, рендерим как раньше. Если они отличны от null, то есть создавались, то заменяем их новыми и удаляем


		if (prevTask === null || prevTaskEdit === null) {
			render(this._taskListContainer, this._task, renderPosition.BEFOREEND);
			return;
		}
	}


	// функции по замене элементов
	_replaceCardToForm() {
		// где меняем->на что меняем->что меняем
		replace(this._taskEdit, this._task);
	}

	_replaceFormToCard() {
		replace(this._task, this._taskEdit);
	}

	// Объявим обработчик клавиши Esc, который будет закрывать форму
	_onEscPress(evt) {
		if (evt.key === `Escape` || evt.key === `Esc`) {
			evt.preventDefault();
			this._replaceFormToCard();
			document.removeEventListener(`keydown`, this._onEscPress);
		}
	}

	// обработчики клика и отправки
	_onEditBtnClick() {
		// evt.preventDefault();
		this._replaceCardToForm();
		document.addEventListener(`keydown`, this._onEscPress);
	}

	_onSubmitBtnClick() {
		// evt.preventDefault();
		this._replaceFormToCard();
		document.removeEventListener(`keydown`, this._onEscPress);
	}


}

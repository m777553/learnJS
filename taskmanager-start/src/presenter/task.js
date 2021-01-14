import TaskEdit from "../view/task-edit.js";

import Task from "../view/task.js";

import {
	renderPosition,
	render,
	replace,
	remove
} from "../utils/render.js";

export default class TaskPresenter {
	constructor(taskListContainer, changeData) {
		this._taskListContainer = taskListContainer;
		this._changeData = changeData;

		this._task = null;
		this._taskEdit = null;


		this._onEscPress = this._onEscPress.bind(this);
		this._onEditBtnClick = this._onEditBtnClick.bind(this);
		this._onSubmitBtnClick = this._onSubmitBtnClick.bind(this);
		this._onFavoriteBtnClick = this._onFavoriteBtnClick.bind(this);
		this._onArchiveBtnClick = this._onArchiveBtnClick.bind(this);
	}
	init(task) {
		this._taskData = task;

		// Добавим возможность повторно инициализировать презентер задачи. Для этого в методе init будем запоминать предыдущие компоненты.
		const prevTask = this._task;
		const prevTaskEdit = this._taskEdit;

		this._task = new Task(task);
		this._taskEdit = new TaskEdit(task);

		// обработчик клика
		this._task.setEditBtnClickHandler(this._onEditBtnClick);
		this._task.setFavoriteBtnClickHandler(this._onFavoriteBtnClick);
		this._task.setArchiveBtnClickHandler(this._onArchiveBtnClick);
		this._taskEdit.setSubmitHandler(this._onSubmitBtnClick);

		// Если prevTask и prevTaskEdit null, то есть не создавались, рендерим как раньше. Если prevTask и prevTaskEdit отличны от null, то есть создавались, то заменяем их новыми и удаляем
		if (prevTask === null || prevTaskEdit === null) {
			render(this._taskListContainer, this._task, renderPosition.BEFOREEND);
			return;
		}

		// Проверка на наличие в DOM необходима,
		// чтобы не пытаться заменить то, что не было отрисовано
		if (this._taskListContainer.getElement().contains(prevTask.getElement())) {
			replace(this._task, prevTask);
		}

		if (this._taskListContainer.getElement().contains(prevTaskEdit.getElement())) {
			replace(this._taskEdit, prevTaskEdit);
		}

		remove(prevTask);
		remove(prevTaskEdit);

	}

	//Добавим метод destroy для удаления компонентов. Он пригодится нам для очистки списка задач при фильтрации и сортировке
	destroy() {
	    remove(this._task);
	    remove(this._taskEdit);
	  }



	// функции по замене элементов
	_replaceCardToForm() {
		// где меняем->на что меняем->что меняем
		replace(this._taskEdit, this._task);
		//при смене задачи на форму добавляем слушатель закрытия ESC
		document.addEventListener(`keydown`, this._onEscPress);
	}

	_replaceFormToCard() {
		replace(this._task, this._taskEdit);
		//при смене формы на задачу удаляем слушатель закрытия ESCом
		document.removeEventListener(`keydown`, this._onEscPress);
	}

	// Объявим обработчик клавиши Esc, который будет закрывать форму,
	//Не забываем bind в копструкторе!!!!!!!
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


// В презентере задачи опишем обработчики клика по кнопкам "Архив" и "В избранное"
	_onFavoriteBtnClick() {
		this._changeData(Object.assign({}, this._taskData, {isFavorite: !this._taskData.isFavorite}));
	}

	_onArchiveBtnClick() {
		this._changeData( Object.assign({}, this._taskData, {isArchive: !this._taskData.isArchive}));
	}


}

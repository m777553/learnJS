import {
	renderPosition,
	render,
	replace,
	remove
} from "../utils/render.js";

export default class TaskPresenter {
	constructor(taskListContainer){
		this._taskListContainer = taskListContainer;


		this._onEscPress = this._onEscPress.bind(this);
		this._onEditBtnClick = this._onEditBtnClick.bind(this);
		this._onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
	}
	init(task){

	}


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

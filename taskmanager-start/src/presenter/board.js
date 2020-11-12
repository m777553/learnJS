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

const TASK_COUNT_PER_STEP = 8;
// const MAX_TASKS_COUNT = 0;


export default class BoardPresenter {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;
    this.renderTaskCountPerStep = TASK_COUNT_PER_STEP;

    this._boardComponent = new Board();
    this._sortComponent = new Sort();
    this._taskListComponent = new TasksBoard();
    this._noTaskComponent = new NoTasksBoard();
  }


  // Метод для инициализации (начала работы) модуля,
  // малая часть текущей функции renderBoard в main.js
  // Сразу создаёт ЗАДАЧИ , отрисовывает ДОСКУ и ДОСКУ ЗАДАЧ и запускает логику работы ДОСКИ
  init(boardTasks) {
    this._boardTasks = boardTasks.slice();

    render(this._boardContainer, this._boardComponent, renderPosition.BEFOREEND);

    render(this._boardComponent, this._taskListComponent, renderPosition.BEFOREEND);

    this._renderBoard();
  }

  // Метод для рендеринга сортировки
  _renderSort() {

    render(this._boardComponent, this._sortComponent, renderPosition.AFTERBEGIN);
  }

  // Метод, куда уйдёт логика созданию и рендерингу компонетов задачи,
  // текущая функция renderTask в main.js
  _renderTask(task) {

    const taskComponent = new Task(task);
    const taskEditComponent = new TaskEdit(task);

    // функции по замене элементов
    const replaceCardToForm = () => {
      // где меняем->на что меняем->что меняем
      replace(taskComponent, taskEditComponent);
    };

    const replaceFormToCard = () => {
      replace(taskEditComponent, taskComponent);
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
    render(this._boardContainer, this._noTaskComponent, renderPosition.BEFOREEND);
  }

  // Метод, куда уйдёт логика по отрисовке компонетов задачи,
  // текущая функция renderTask в main.js
  _renderLoadMoreButton() {
    // Заведем счетчик показанных задач
    let renderTaskCount = this.renderTaskCountPerStep;

    const loadMoreButton = new LoadMoreButton();
    render(this._boardComponent, loadMoreButton, renderPosition.BEFOREEND);

    const onLoaddMoreBtnClick = () => {
      // evt.preventDefault();
      this._renderTasks(renderTaskCount, renderTaskCount + this.renderTaskCountPerStep);

      renderTaskCount += this.renderTaskCountPerStep;

      if (renderTaskCount >= this._boardTasks.length) {
        remove(loadMoreButton);
      }
    };

    loadMoreButton.setClickHandler(onLoaddMoreBtnClick);

  }

  // Выделяем в презентере рендеринг списка
  _renderTaskList() {
    this._renderTasks(0, Math.min(this._boardTasks.length, this.renderTaskCountPerStep));

    if (this._boardTasks.length > this.renderTaskCountPerStep) {
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

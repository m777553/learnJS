import FilterMenu from "./view/filter.js";

import SiteMenu from "./view/site-menu.js";

import BoardPresenter from "./presenter/board.js";

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
  render
} from "./utils/render.js";

// const TASK_COUNT_PER_STEP = 8;
const MAX_TASKS_COUNT = 22;

// // Функция принимает контейнер для вставки, разметку в виде строки  и положение
// const render = (container, template, place) => {
// 	container.insertAdjacentHTML(place, template);
// };

const siteMainElem = document.querySelector(`.main`);

const siteMenuElem = siteMainElem.querySelector(`.main__control`);


// Это моковые данные, которые пошли в разметку
const tasks = generateTasks(MAX_TASKS_COUNT);
const filters = generateFilter(tasks);

{ // const renderTask = (container, boardTask) => {
//   const taskComponent = new Task(boardTask);
//   const taskEditComponent = new TaskEdit(boardTask);
//
//   // функции по замене элементов
//   const replaceCardToForm = () => {
//     // где меняем->на что меняем->что меняем
//     container.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
//   };
//
//   const replaceFormToCard = () => {
//     container.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
//   };
//
//   // Объявим обработчик клавиши Esc, который будет закрывать форму
//   const onEscPress = (evt) => {
//     if (evt.key === `Escape` || evt.key === `Esc`) {
//       evt.preventDefault();
//       replaceFormToCard();
//       document.removeEventListener(`keydown`, onEscPress);
//     }
//   };
//
//   // обработчики клика и отправки
//   const onEditBtnClick = () => {
//     // evt.preventDefault();
//     replaceCardToForm();
//     document.addEventListener(`keydown`, onEscPress);
//   };
//
//   const onSubmitBtnClick = () => {
//     // evt.preventDefault();
//     replaceFormToCard();
//     document.removeEventListener(`keydown`, onEscPress);
//   };
//
//
//   // обработчик клика
//   taskComponent.setEditBtnClickHandler(onEditBtnClick);
//
//   taskEditComponent.setSubmitHandler(onSubmitBtnClick);
//
//
//   render(container, taskComponent.getElement(), renderPosition.BEFOREEND);
// };

// const renderBoard = (boardHolder, boardTasks) => {
//
//   const boardContainer = new Board();
//   render(boardHolder, boardContainer.getElement(), renderPosition.BEFOREEND);
//
//   const sortContainer = new Sort();
//   const tasksContainer = new TasksBoard();
//
//
//   // По условию заглушка должна показываться,
//   // renderTask(taskListComponent.getElement(), tasks[i]);	  // когда нет задач или все задачи в архиве.
//   // Мы могли бы написать:
//   // tasks.length === 0 || tasks.every((task) => task.isArchive)
//   // Но благодаря тому, что на пустом массиве every вернёт true,
//   // мы можем опустить "tasks.length === 0".
//   // p.s. А метод some на пустом массиве наборот вернет false
//   if (boardTasks.every((boardTask) => boardTask.isArchive)) {
//     render(boardContainer.getElement(), new NoTasksBoard().getElement(), renderPosition.BEFOREEND);
//   } else {
//
//     render(boardContainer.getElement(), sortContainer.getElement(), renderPosition.BEFOREEND);
//
//
//     render(boardContainer.getElement(), tasksContainer.getElement(), renderPosition.BEFOREEND);
//
//     // const tasksContainer = boardContainer.getElement().querySelector(`.board__tasks`);
//
//
//     // Рендерим карточки задач
//     // Ограничим первую отрисовку по минимальному количеству, чтобы не пытаться рисовать 8 задач, если всего 5
//     for (let i = 0; i < Math.min(boardTasks.length, TASK_COUNT_PER_STEP); i++) {
//       renderTask(tasksContainer.getElement(), boardTasks[i]);
//     }
//   }
//   // Отобразим кнопку LOAD MORE, если общее количество задач больше
//   if (boardTasks.length > TASK_COUNT_PER_STEP) {
//
//     // Заведем счетчик показанных задач
//     let renderTaskCount = TASK_COUNT_PER_STEP;
//
//
//     const loadMoreButton = new LoadMoreButton();
//     render(boardContainer.getElement(), loadMoreButton.getElement(), renderPosition.BEFOREEND);
//
//     const onLoaddMoreBtnClick = () => {
//       // evt.preventDefault();
//       boardTasks.slice(renderTaskCount, renderTaskCount + TASK_COUNT_PER_STEP).forEach((boardTask) => {
//         renderTask(tasksContainer.getElement(), boardTask);
//       });
//       renderTaskCount += TASK_COUNT_PER_STEP;
//
//       if (renderTaskCount >= boardTasks.length) {
//         loadMoreButton.getElement().remove();
//         loadMoreButton.removeElement();
//       }
//     };
//
//     // Добавим обработчик на кнопку LOAD MORE
//     // По клику будем допоказывать задачи, опираясь на счётчик
//     loadMoreButton.setClickHandler(onLoaddMoreBtnClick);
//   }
// };
}


render(siteMenuElem, new SiteMenu().getElement(), renderPosition.BEFOREEND);


render(siteMainElem, new FilterMenu(filters).getElement(), renderPosition.BEFOREEND);

// renderBoard(siteMainElem, tasks);
const boardPresenter = new BoardPresenter(siteMainElem);
boardPresenter.init(tasks);

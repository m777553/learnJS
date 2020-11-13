import Abstract from "./abstract.js";
import {SortType} from "../const.js";

export const createSiteSortTemplate = () => {
  return (
    `<div class="board__filter-list">
			<a href="#" class="board__filter" data-sort-type="${SortType.DEFAULT}">SORT BY DEFAULT</a>
			<a href="#" class="board__filter" data-sort-type="${SortType.DATE_UP}">SORT BY DATE up</a>
			<a href="#" class="board__filter" data-sort-type="${SortType.DATE_DOWN}">SORT BY DATE down</a>
		</div>`
  );
};


export default class Sort extends Abstract {
  constructor() {
    super();

    this._onSortTypeChange =   this._onSortTypeChange.bind(this);
  }
  getTemplate() {
    return createSiteSortTemplate();
  }
  _onSortTypeChange(evt) {
    //Добавим проверку на тег "а", чтобы клики по блоку сортировки не вызывали колбэк
    if (evt.target.tagName !== `A`) {
      return;
    }
    evt.preventDefault();

    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

//то что будет устанавливать callback функцию
  setSortTypeChange(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._onSortTypeChange);
  }
}

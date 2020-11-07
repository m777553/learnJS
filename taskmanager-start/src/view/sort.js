import {createMyElement} from "../utils.js";

export const createSiteSortTemplate = () => {
  return (
    `<div class="board__filter-list">
			<a href="#" class="board__filter">SORT BY DEFAULT</a>
			<a href="#" class="board__filter">SORT BY DATE up</a>
			<a href="#" class="board__filter">SORT BY DATE down</a>
		</div>`
  );
};


export default class Sort {
  constructor() {
    // this._menu = menu;

    this._element = null;
  }

  getTemplate() {
    return createSiteSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createMyElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

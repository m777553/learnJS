import {createMyElement} from "../utils.js";

const createSiteBoardContainerTemplate = () => {
  return (
    `<section class="board container">

      </section>`
  );
};

export default class Board {
  constructor() {
    // this._menu = menu;

    this._element = null;
  }

  getTemplate() {
    return createSiteBoardContainerTemplate();
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

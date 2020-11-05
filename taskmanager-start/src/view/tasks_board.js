import {createMyElement} from "../utils.js";
const createTasksBoardTemplate = () =>{
  return (
    `<div class="board__tasks">
</div>`
  );
};

export default class TasksBoard {
  constructor() {
    // this._menu = menu;

    this._element = null;
  }

  getTemplate() {
    return createTasksBoardTemplate();
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

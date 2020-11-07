import {createMyElement} from "../utils.js";

const crearteNoTasksTemplate = () => {
	return (
		`<p class="board__no-tasks">
          Click «ADD NEW TASK» in menu to create your first task
        </p>`
	)
}

export default class NoTasksBoard {
	constructor() {
		this._element = null;
	}

	getTemplate() {
    return crearteNoTasksTemplate();
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

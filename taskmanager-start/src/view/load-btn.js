import {createMyElement} from "../utils.js";

const createSiteLoadBtnTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export default class LoadMoreButton {
	constructor() {
		//this._menu = menu;

		this._element = null;
	}

	getTemplate() {
		return createSiteMenuTemplate();
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

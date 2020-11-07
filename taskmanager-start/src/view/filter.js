import {createMyElement} from "../utils.js";

const createFilterMarkup = (filter, isChecked) => {

  // деструкция элемента массива по ключам чтобы потом писать не filter.name, filter.count , а просто name и count
  const {name, count} = filter;

  return (
    `<input
			type="radio"
			id="filter__${name}"
			class="filter__input visually-hidden"
			name="filter"
			${isChecked ? `checked` : ``}
		/>
		<label for="filter__${name}" class="filter__label">
			${name} <span class="filter__${name}-count">${count}</span></label
		>`
  );
};

const createSiteFilterTemplate = (filters) => {

  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
			${filtersMarkup}

		</section>`
  );
};


export default class FilterMenu {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createSiteFilterTemplate(this._filters);
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

import Abstract from "./abstract.js";

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


export default class FilterMenu extends Abstract {
  constructor(filters) {
    // супер для наследования из класса свойства this._element = null; и тд
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createSiteFilterTemplate(this._filters);
  }
}

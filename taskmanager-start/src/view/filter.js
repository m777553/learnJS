

const createFilterMarkup = (filter, isChecked) => {

  // деструкция элемента массива по ключам чтобы потом писать не filters.name, filters.count , а просто name и count
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

export const createSiteFilterTemplate = (filters) => {

  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
			${filtersMarkup}

		</section>`
  );
};

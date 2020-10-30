const createColorsMarkup = () => {
	return (
		`<input type="radio" id="color-black-4" class="card__color-input card__color-input--black visually-hidden" name="color" value="black">
		<label for="color-black-4" class="card__color card__color--black">black</label>
		<input type="radio" id="color-yellow-4" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow" checked="">
		<label for="color-yellow-4" class="card__color card__color--yellow">yellow</label>
		<input type="radio" id="color-blue-4" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
		<label for="color-blue-4" class="card__color card__color--blue">blue</label>
		<input type="radio" id="color-green-4" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
		<label for="color-green-4" class="card__color card__color--green">green</label>
		<input type="radio" id="color-pink-4" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
		<label for="color-pink-4" class="card__color card__color--pink">pink</label>`
	);
};

const createRepeatingDaysMarkup = (weekObject) => {
	return (
		Object.entries(weekObject).map(([day, value]) =>


			`<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-${day}-4" name="repeat" value="${day}" ${value ? `checked` : ``}>
  		<label class="card__repeat-day" for="repeat-${day}-4">${day}</label>`
		).join(``)
	);
};

export {
	createColorsMarkup,
	createRepeatingDaysMarkup
};

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
	)
};

const createRepeatingDaysMarkup = () => {
	return (
		`<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-4" name="repeat" value="mo">
		<label class="card__repeat-day" for="repeat-mo-4">mo</label>
		<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-4" name="repeat" value="tu" checked="">
		<label class="card__repeat-day" for="repeat-tu-4">tu</label>
		<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-4" name="repeat" value="we">
		<label class="card__repeat-day" for="repeat-we-4">we</label>
		<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-4" name="repeat" value="th">
		<label class="card__repeat-day" for="repeat-th-4">th</label>
		<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-4" name="repeat" value="fr" checked="">
		<label class="card__repeat-day" for="repeat-fr-4">fr</label>
		<input class="visually-hidden card__repeat-day-input" type="checkbox" name="repeat" value="sa" id="repeat-sa-4">
		<label class="card__repeat-day" for="repeat-sa-4">sa</label>
		<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-4" name="repeat" value="su" checked="">
		<label class="card__repeat-day" for="repeat-su-4">su</label>`
	)
};

export {
	createColorsMarkup,
	createRepeatingDaysMarkup
};

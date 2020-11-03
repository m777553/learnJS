import {
  COLORS as colors
} from "./../const.js";

import {createMyElement} from "../utils.js";


const createColorsMarkup = (currentColor) => {
  // const colors = [`black`, `green`, `pink`, `yellow`, `blue`];
  return (colors.map((color) =>
    `<input type="radio" id="color-${color}-4" class="card__color-input card__color-input--${color} visually-hidden"
		name="color"
		value="${color}"
		${currentColor === color ? `checked` : ``}/>

		<label for="color-${color}-4" class="card__color card__color--${color}">${color}</label>`
  ).join(``)
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

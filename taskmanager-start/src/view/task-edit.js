import {
	createColorsMarkup,
	createRepeatingDaysMarkup
} from "./days_and_colors_markup.js";

import {
	isRepeating,
	humanizeDate,
	humanizeTime
} from "../utils/task.js";

import Abstract from "./abstract.js";

import {
	COLORS
} from "./../const.js";

const BLANK_TASK = {
	color: COLORS[0],
	description: ``,
	dueDate: null,
	repeatingDays: {
		mo: false,
		tu: false,
		we: false,
		th: false,
		fr: false,
		sa: false,
		su: false
	},
	isArchive: false,
	isFavorite: false,

};
const createTaskEditDateTemplate = (dueDate, isDueDate) => {
	// чтение даты в человеческом формате
	const date = humanizeDate(dueDate);
	const time = humanizeTime(dueDate);

	return (
		`<button class="card__date-deadline-toggle" type="button">
        date: <span class="card__date-status">${isDueDate? `yes`:`no`}</span>
      </button>
    ${isDueDate ? `<fieldset class="card__date-deadline">
        <label class="card__input-deadline-wrap">
          <input class="card__date" type="text" placeholder="" name="date" value="${date} ${time}">
        </label>
      </fieldset>`:``}`
	)
};

const createTaskEditRepeatingTemplate = (repeatingDays, isRepeatingDays) => {
	const repeatingDaysMarkup = createRepeatingDaysMarkup(repeatingDays);
	return (`<button class="card__repeat-toggle" type="button">
        repeat:<span class="card__repeat-status">${isRepeatingDays ? `yes`:`no`}</span>
      </button>

      ${isRepeatingDays? `<fieldset class="card__repeat-days">
        <div class="card__repeat-days-inner">
          ${repeatingDaysMarkup}
        </div>
      </fieldset>`:``}`)
};

const createSiteTaskFormEditTemplate = (data) => {
	const {
		description,
		dueDate,
		repeatingDays,
		color,
		isRepeatingDays,
		isDueDate

	} = data;

	if (!description) {
		return ``;
	}
	const colorsMarkup = createColorsMarkup(color);

	const repeatingTemplate = createTaskEditRepeatingTemplate(repeatingDays, isRepeatingDays);

	const dateTemplate = createTaskEditDateTemplate(dueDate, isDueDate);


	//const repeatingYesNo = isRepeating(repeatingDays) ? `yes` : `no`;

	const repeatinClassName = isRepeating(repeatingDays) ? `card--repeat` : ``;

	// console.log(repeatingDays);

	return (
		`<article class="card card--edit card--${color} ${repeatinClassName}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text">${description}</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">


${dateTemplate}

${repeatingTemplate}





                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      ${colorsMarkup}
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`
	);
};


export default class TaskEdit extends Abstract {
	constructor(task = BLANK_TASK) {
		super();
		this._data = TaskEdit.parseTaskToData(task);
		this._submitHandler = this._submitHandler.bind(this);
	}

	getTemplate() {
		return createSiteTaskFormEditTemplate(this._data);
	}

	_submitHandler(evt) {
		evt.preventDefault();
		this._callback.click(TaskEdit.parseDataToTask(this._data));
	}
	setSubmitHandler(callback) {
		this._callback.click = callback;
		this.getElement().addEventListener(`submit`, this._submitHandler);
	}

  static parseTaskToData(task) {
    return Object.assign(
        {},
        task,
        {
          isDueDate: task.dueDate !== null,
          isRepeatingDays: isRepeating(task.repeatingDays)
        }
    );
  }

  static parseDataToTask(data) {
    data = Object.assign({}, data);

    if (!data.isDueDate) {
      data.dueDate = null;
    }

    if (!data.isRepeating) {
      data.repeating = {
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false
      };
    }

    delete data.isDueDate;
    delete data.isRepeating;

    return data;
  }


}

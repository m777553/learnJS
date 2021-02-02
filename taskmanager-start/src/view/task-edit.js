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

//метод _setInnerHandlers будет навешивать внутренние обработчики, вроде переключения выбора даты или повторения
		this._setInnerHandlers();

		this._submitHandler = this._submitHandler.bind(this);
    this._dueDateToggleHandler = this._dueDateToggleHandler.bind(this);
    this._repeatingToggleHandler = this._repeatingToggleHandler.bind(this);



    //ВРЕМЕННО ОБЪЯВЛЯЕМ ОБРАБОТЧИКИ В КОНСТРУКТОРЕ
    this.getElement()
     .querySelector(`.card__date-deadline-toggle`)
     .addEventListener(`click`, this._dueDateToggleHandler);
   this.getElement()
     .querySelector(`.card__repeat-toggle`)
     .addEventListener(`click`, this._repeatingToggleHandler);
	}

	getTemplate() {
		return createSiteTaskFormEditTemplate(this._data);
	}


// Опишем метод updateData, который будет обновлять данные в свойстве _data, а потом вызывать обновление шаблона

  updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    this.updateElement();
  }

	// Опишем метод restoreHandlers, который будет восстанавливать обработчики после обновления. Здесь нужно восстановить как внутренние, так и внешние
	restoreHandlers(){
		this._setInnerHandlers();
		this.setSubmitHandler(this._callback.click)
	}

	_setInnerHandlers() {
		this.getElement().querySelector(`.card__date-deadline-toggle`).addEventListener(`click`, this._dueDateToggleHandler);
    this.getElement().querySelector(`.card__repeat-toggle`).addEventListener(`click`, this._repeatingToggleHandler);
	}


  _dueDateToggleHandler(evt){
    evt.preventDefault();
    this.updateData({
      isDueDate: !this._data.isDueDate
    });
  }

  _repeatingToggleHandler(evt){
    evt.preventDefault();
    this.updateData({
      isRepeatingDays: !this._data.isRepeatingDays
    });
  }


  // Объявим метод updateElement, его задача удалить старый DOM элемент, вызвать генерацию нового и заменить один на другой
  //
  // N.B. "Фокус" в том, что при генерации нового элемента будет снова зачитано свойство _data. И если мы сперва обновим его, а потом шаблон, то в итоге получим элемент с новыми данными
  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);
    prevElement = null; // Чтобы окончательно "убить" ссылку на prevElement

		this.restoreHandlers(); //восстанавливаем обработчики
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

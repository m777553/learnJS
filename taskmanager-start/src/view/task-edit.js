import {
  createColorsMarkup,
  createRepeatingDaysMarkup
} from "./days_and_colors_markup.js";

import {
  isRepeating,
  humanizeDate,
  humanizeTime,
  createMyElement
} from "../utils";


const createSiteTaskFormEditTemplate = (task) => {
  const {
    description,
    dueDate,
    repeatingDays,
    color
  } = task;

  if (!description) {
    return ``;
  }
  const colorsMarkup = createColorsMarkup(color);
  const repeatingDaysMarkup = createRepeatingDaysMarkup(repeatingDays);

  // чтение даты в человеческом формате
  const date = humanizeDate(dueDate);
  const time = humanizeTime(dueDate);

  const repeatingYesNo = isRepeating(repeatingDays) ? `yes` : `no`;

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
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">yes</span>
                      </button>

                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input class="card__date" type="text" placeholder="" name="date" value="${date} ${time}">
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">${repeatingYesNo}</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          ${repeatingDaysMarkup}
                        </div>
                      </fieldset>
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


export default class TaskEdit {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createSiteTaskFormEditTemplate(this._task);
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

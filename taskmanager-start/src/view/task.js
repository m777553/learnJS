import {
	isRepeating,
	isExpired,
	humanizeDate,
	humanizeTime
} from "../utils/task.js";

import Abstract from "./abstract.js";


const createSiteCardTemplate = (task) => {
	const {
		description,
		dueDate,
		repeatingDays,
		color,
		isFavorite,
		isArchive
	} = task;

	// чтение даты в человеческом формате
	const date = humanizeDate(dueDate);
	const time = humanizeTime(dueDate);


	// классы для просроченных, архивных и любимых дел
	const deadlineClassName = isExpired(dueDate) ? `card--deadline` : ``;

	const archiveClassName = isArchive ? `card__btn--archive` : `card__btn--archive card__btn--disabled`;

	const favoriteClassName = isFavorite ? `card__btn--favorites` : `card__btn--favorites card__btn--disabled`;


	const repeatinClassName = isRepeating(repeatingDays) ? `card--repeat` : ``;


	return (
		`<article class="card card--${color} ${repeatinClassName} ${deadlineClassName}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn ${archiveClassName}">
                    archive
                  </button>
                  <button type="button" class="card__btn  ${favoriteClassName}">
                    favorites
                  </button>
                </div>




                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>




                <div class="card__textarea-wrap">
                  <p class="card__text">${description}</p>
                </div>




                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${date}</span>
                          <span class="card__time">${time}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`
	);
};


export default class Task extends Abstract {
	constructor(task) {
		super();
		this._task = task;
		this._editBtnClickHandler = this._editBtnClickHandler.bind(this);
		this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
		this._archiveClickHandler = this._archiveClickHandler.bind(this);
	}

	getTemplate() {
		return createSiteCardTemplate(this._task);
	}
	_editBtnClickHandler(evt) {
		evt.preventDefault();
		this._callback.click();
	}
	_favoriteClickHandler(evt) {
		evt.preventDefault();
		this._callback.favoriteClick();
	}
	_archiveClickHandler(evt) {
		evt.preventDefault();
		this._callback.archiveClick();
	}

	setEditBtnClickHandler(callback) {
		this._callback.click = callback;
		this.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, this._editBtnClickHandler);
	}
	setFavoriteBtnClickHandler(callback) {
		this._callback.favoriteClick = callback;
		this.getElement().querySelector(`.card__btn--favorites`).addEventListener(`click`, this._favoriteClickHandler);
	}
	setArchiveBtnClickHandler(callback) {
		this._callback.archiveClick = callback;
		this.getElement().querySelector(`.card__btn--archive`).addEventListener(`click`, this._archiveClickHandler);
	}
}

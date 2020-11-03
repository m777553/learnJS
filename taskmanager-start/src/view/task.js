// import {
//   date,
//   time
// } from "./time.js";

import {
  isRepeating,
  isExpired,
  humanizeDate,
  humanizeTime
} from "../utils";

export const createSiteCardTemplate = (task) => {
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

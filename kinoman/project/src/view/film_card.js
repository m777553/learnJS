import Abstract from "./abstract.js";

const createCardMarkup = (film) => {
  const {
    title,
    rating,
    year,
    duration,
    genres,
    poster,
    description,
    comments,
    isWatchlist,
    isWatched,
    isFavorite
  } = film;

  const watchlistClass = isWatchlist ? `film-card__controls-item--active` : ``;
  const watchedClass = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteClass = isFavorite ? `film-card__controls-item--active` : ``;
  const commentsCount = comments.length;

  return (
    `<article class="film-card">
	<h3 class="film-card__title">${title}</h3>
	<p class="film-card__rating">${rating}</p>
	<p class="film-card__info">
		<span class="film-card__year">${year}</span>
		<span class="film-card__duration">${duration}</span>
		<span class="film-card__genre">${genres[0]}</span>
	</p>
	<img src="${poster}" alt="" class="film-card__poster">
	<p class="film-card__description">${description}</p>
	<a class="film-card__comments">${commentsCount} comments</a>
	<form class="film-card__controls">
		<button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistClass}">Add to watchlist</button>
		<button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClass}">Mark as watched</button>
		<button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClass}">Mark as favorite</button>
	</form>
</article>`
  );
};

export default class FilmCard extends Abstract {
  constructor(film) {
    super();
    this._film = film;
  }
  getTemplate() {
    return createCardMarkup(this._film);
  }
}

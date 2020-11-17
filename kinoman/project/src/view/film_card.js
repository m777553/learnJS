import Abstract from "./abstract.js";

const createCardMarkup = (film) => {
  const {
    title,
    rating,
    year,
    duration,
    genre,
    poster,
    description,
    commentsCount,
    isWatchlist,
    isWatched,
    isFavorite
  } = film;

  const watchlistClass = isWatchlist ? `film-card__controls-item--active` : ``;
  const watchedClass = isWatchlist ? `film-card__controls-item--active` : ``;
  const favoriteClass = isWatchlist ? `film-card__controls-item--active` : ``;

  return (
    `<article class="film-card">
	<h3 class="film-card__title">${title}</h3>
	<p class="film-card__rating">${rating}</p>
	<p class="film-card__info">
		<span class="film-card__year">${year}</span>
		<span class="film-card__duration">${duration}</span>
		<span class="film-card__genre">${genre}</span>
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

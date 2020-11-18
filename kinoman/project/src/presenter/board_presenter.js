import Board from "../view/board.js";
import BoardFilms from "../view/board_films.js";
import ExtraFilms from "../view/extra_films_container.js";
import FilmCard from "../view/film_card.js";
import FilmsContainer from "../view/films_container.js";
import ShowMoreBtn from "../view/show_more_btn.js";
import NoFilm from "../view/no_film.js";

import {
	renderPosition,
	render,
	replace,
	remove
} from "../utils/render.js";


const FILM_COUNT_PER_STEP = 5;

export default class BoardPresenter {
	constructor(boardContainer) {
		this._boardContainer = boardContainer;
		this._renderFilmCountPerStep = FILM_COUNT_PER_STEP;

		this._mainBoard = new Board();
		this._boardFilms = new BoardFilms();
		this._boardExtraFilms = new ExtraFilms();
		this._FilmsContainer = new FilmsContainer();
		this._showMoreBtn = new ShowMoreBtn();
		this._noFilm = new NoFilm();
	}

	init(films) {
		this._films = films.slice();
		render(this._boardContainer, this._mainBoard, renderPosition.BEFOREEND);

	}

}

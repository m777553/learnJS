import Board from "../view/board.js";
import BoardFilms from "../view/board_films.js";
import ExtraFilms from "../view/extra_films_container.js";
import FilmCard from "../view/film_card.js";
import FilmCardEdit from "../view/film_card_edit.js";
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
		this._filmsContainer = new FilmsContainer();
		this._showMoreBtn = new ShowMoreBtn();
		this._noFilm = new NoFilm();


		this._onShowMoreBtnClick = this._onShowMoreBtnClick.bind(this);
	}

	init(films) {
		this._films = films.slice();
		console.log(this._films.length);
		render(this._boardContainer, this._mainBoard, renderPosition.BEFOREEND);

		this._renderBoard();
	}
	_renderBoard() {
		if (this._films.every((film) => film.isWatched)) {
			this._renderNoFilm();

			return;
		}
		this._renderBoardFilms();
	}
	_renderNoFilm() {
		render(this._mainBoard, this._noFilm, renderPosition.BEFOREEND);
	}
	_renderBoardFilms() {
		render(this._mainBoard, this._boardFilms, renderPosition.BEFOREEND);
		render(this._boardFilms, this._filmsContainer, renderPosition.BEFOREEND);

		this._renderFilmsList();
	}
	_renderFilmsList() {
		this._renderSomeFilms(0, Math.min(this._films.length, this._renderFilmCountPerStep));
		if (this._films.length > this._renderFilmCountPerStep) {
			this._renderShowMoreBtn();
		}
	}
	_renderSomeFilms(from, to) {
		this._films.slice(from, to).forEach((film) => {
			this._renderFilm(film);
		});
	}
	_renderFilm(film) {
    //не используем this иначе работает только с одной карточкой
		const filmCard = new FilmCard(film);
		const filmCardEdit = new FilmCardEdit(film);
		const footer = document.querySelector('.footer');
		// перед отрисовкой карты НУЖНО вставить ОБРАБОТЧИКИ открытия и закрытия




		// Объявим обработчик клавиши Esc, который будет закрывать форму
		const onEscPress = (evt) => {
			if (evt.key === `Escape` || evt.key === `Esc`) {
				evt.preventDefault();
				remove(filmCardEdit);
				//  document.removeEventListener(`keydown`, onEscPress);
			}
		};

		// обработчики клика и отправки
		const onFilmClick = () => {
			// evt.preventDefault();
			render(footer, filmCardEdit, renderPosition.AFTEREND);
			document.addEventListener(`keydown`, onEscPress);
		};

		const onCloseBtnClick = () => {
			// evt.preventDefault();
			remove(filmCardEdit);
			document.removeEventListener(`keydown`, onEscPress);
		};


		// обработчик клика
		filmCard.setClickHandler(onFilmClick);

		filmCardEdit.setClickHandler(onCloseBtnClick);








		render(this._filmsContainer, filmCard, renderPosition.BEFOREEND);

	}
	_renderShowMoreBtn() {
		render(this._boardFilms, this._showMoreBtn, renderPosition.BEFOREEND);
		this._showMoreBtn.setClickHandler(this._onShowMoreBtnClick);
	}
	_onShowMoreBtnClick() {
		this._renderSomeFilms(this._renderFilmCountPerStep, this._renderFilmCountPerStep + FILM_COUNT_PER_STEP);
		this._renderFilmCountPerStep += FILM_COUNT_PER_STEP;

		if (this._renderFilmCountPerStep >= this._films.length) {
			remove(this._showMoreBtn);
		}
	}


}

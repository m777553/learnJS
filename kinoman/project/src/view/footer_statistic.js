const getCountOfFilms = (films) => {
  return films.length;
};
const countOfFilms = getCountOfFilms(films);


const createFooterStatisticMarkup = (countOfFilms) => {

  return (

    `<section class="footer__statistics">
				<p>${countOfFilms} movies inside</p>
			</section>`
  );
};


export default class FooterStatistic extends Abstract {
  constructor(film) {
    super();
    this._film = film;
  }
  getTemplate() {
    return createFooterStatisticMarkup(this._film);
  }
}

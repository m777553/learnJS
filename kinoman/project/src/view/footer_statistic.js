import Abstract from "./abstract.js";



const createFooterStatisticMarkup = (films) => {
	const countOfFilms = films.length;
	return (

		`<section class="footer__statistics">
				<p>${countOfFilms} movies inside</p>
			</section>`
	);
};


export default class FooterStatistic extends Abstract {
	constructor(films) {
		super();
		this._films = films;
	}
	getTemplate() {
		return createFooterStatisticMarkup(this._films);
	}
}

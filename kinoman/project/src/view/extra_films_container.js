import Abstract from "./abstract.js";
const createExtraFilmsContainerMarkup = () => {
  return (
  // film_card 2
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">


			</div>
		</section>`
  );
};
export default class ExtraFilms extends Abstract {
  getTemplate() {
    return createExtraFilmsContainerMarkup();
  }
}

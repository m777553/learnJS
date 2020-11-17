
import Abstract from "./abstract.js";

const createBoardMarkup = () => {
  return (
  // board_films
  // films-list--extra
  // films-list--extra
    `<section class="films">

		</section>`
  );
};

export default class Board extends Abstract {
  getTemplate() {
    return createBoardMarkup();
  }
}

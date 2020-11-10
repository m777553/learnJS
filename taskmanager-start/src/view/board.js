import Abstract from "./abstract.js";

const createSiteBoardContainerTemplate = () => {
  return (
    `<section class="board container">

      </section>`
  );
};


export default class Board extends Abstract {
  getTemplate() {
    return createSiteBoardContainerTemplate();
  }
}

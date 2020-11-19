import Abstract from "./abstract.js";
const createFilmsContainerMarkup = () => {
  return (
    `<div class="films-list__container">




      </div>`
  )
};

export default class FilmsContainer extends Abstract {
  getTemplate() {
    return createFilmsContainerMarkup();
  }
}

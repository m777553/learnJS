import Abstract from "./abstract.js";

const createShowMoreBtnMarkup = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class ShowMoreBtn extends Abstract {
  getTemplate() {
    return createShowMoreBtnMarkup();
  }
}

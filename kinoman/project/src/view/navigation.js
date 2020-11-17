import Abstract from "./abstract.js";
const createNavigationMarkup = (navigation) => {
  const {
    // isActive из mock ли приходит?....
    isActive,
    name,
    count
  } = navigation;
  const activeClass = isActive ? `navigation__item--active` : ``;
  return (
    `<nav class="main-navigation">
	    <div class="main-navigation__items">
	      <a href="#all" class="main-navigation__item main-navigation__item--active ${activeClass}">All movies</a>

	      <a href="#watchlist" class="main-navigation__item ${activeClass}">${name} <span class="main-navigation__item-count">${count}</span></a>

	      <a href="#history" class="main-navigation__item ${activeClass}">${name} <span class="main-navigation__item-count">${count}</span></a>

	      <a href="#favorites" class="main-navigation__item ${activeClass}">${name} <span class="main-navigation__item-count">${count}</span></a>
	    </div>
	    <a href="#stats" class="main-navigation__additional">Stats</a>
	  </nav>`
  );
};

export default class Navigation extends Abstract {
  constructor(navigation) {
    super();
    this._navigation = navigation;
  }
  getTemplate() {
    return createNavigationMarkup(this._navigation);
  }
}

import Abstract from "./abstract.js";
const createNavigationOneMarkup = (navigationOne, isChecked) => {
  const {
    idFilm,
    name,
    count
  } = navigationOne;
  const activeClass = isChecked ? `main-navigation__item--active` : ``;
  const hiddenClass = isChecked ? `visually-hidden` : ``;
  // const noCount =

  return (
    ` <a href="#${idFilm}" class="main-navigation__item ${activeClass}">${name} <span class="main-navigation__item-count ${hiddenClass}">${count}</span></a>`
  );
};


const createNavigationMarkup = (navigation) => {
  const navigationOne = navigation.map((it, i) =>	createNavigationOneMarkup(it, i === 0)).join(`\n`);

  return (
    `<nav class="main-navigation">
	    <div class="main-navigation__items">

        ${navigationOne}
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

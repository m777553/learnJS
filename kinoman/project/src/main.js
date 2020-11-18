//import FooterStatistic from "./view/footer_statistic.js";
import Sort from "./view/sort.js";
import Navigation from "./view/navigation.js";
import Profile from "./view/profile.js";
import BoardPresenter from "./presenter/board_presenter.js";

import {
	generateNavigation
} from "./mock/navigation.js";
import {
	generateFilms
} from "./mock/film.js";
import {
	generateUser
} from "./mock/user.js";

import {
	renderPosition,
	render
} from "./utils/render.js";

const MAX_FILMS_COUNT = 11;

//генерируем МОКОвый контент
const films = generateFilms(MAX_FILMS_COUNT);
console.log(films);

const user = generateUser();
console.log(user);

const navigation = generateNavigation(films);
console.log(navigation);

const profile = new Profile(user);
const header = document.querySelector('.header');
render(header, profile.getElement(), renderPosition.BEFOREEND);


const main = document.querySelector('.main');
const navigationMenu = new Navigation(navigation);
render(main, navigationMenu.getElement(), renderPosition.AFTERBEGIN);

const sort = new Sort();
render(main, sort.getElement(), renderPosition.BEFOREEND);

const boardPresenter = new BoardPresenter(main);
boardPresenter.init(films);

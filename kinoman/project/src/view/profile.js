import Abstract from "./abstract.js";
const createProfileMarkup = (user) => {
  const {
    name,
    imgSrc
  } = user;
  return (
    `<section class="header__profile profile">
	    <p class="profile__rating">${name}</p>
	    <img class="profile__avatar" src="${imgSrc}" alt="Avatar" width="35" height="35">
	  </section>`
  );
};

export default class Profile extends Abstract {
  constructor(user) {
    super();
    this._user = user;
  }
  getTemplate() {
    return createProfileMarkup(this._user);
  }
}

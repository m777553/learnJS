import {
  getRandomInteger
} from "../utils/common.js";

const names = [``, `Novice`, `Fan`, `Movie Buff`];

// 0 — звание не отображается;
// • от 1 до 10 — novice;
// • от 11 до 20 — fan;
// • от 21 и выше — movie buff;
const wathedFilms = getRandomInteger(0, 30);

const imgSrc = `../images/bitmap@2x.png`;

export const generateUser = () => {

  if (wathedFilms === 0) {
    name = names[0];
  }
  if (wathedFilms >= 1 && wathedFilms <= 10) {
    name = names[1];
  }
  if (wathedFilms >= 11 && wathedFilms <= 20) {
    name = names[2];
  }
  if (wathedFilms > 20) {
    name = names[3];
  }
  return {
    name,
    imgSrc
  };

};

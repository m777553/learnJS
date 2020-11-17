import {
  getRandomInteger,
  randomIndex
} from "./../utils/common.js";

const generateTitle = () => {
  const filmTitles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`,
    `Made for Each Other`,
  ];
  // const randomIndex = getRandomInteger(0, filmTitles.length - 1);
  return filmTitles[randomIndex(filmTitles)];
};

const generateRating = () => {
  return getRandomInteger(0, 100) / 10;
};

const generateYear = () => {
  return getRandomInteger(1920, 1980);
};

const generateDuration = () => {
  const hour = getRandomInteger();
  const minutes = getRandomInteger(5, 59);
  return `${hour}h ${minutes}m`;
};

const generateGenre = () => {
  const genres = [
    `Musical`,
    `Western`,
    `Drama`,
    `Comedy`,
    `Cartoon`,
    `Mystery`
  ];
  return genres[randomIndex(genres)];
};

const generatePoster = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ];

  return `./images/posters/${posters[randomIndex(posters)]}`;
};

const generateDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  ];
  return descriptions[randomIndex(descriptions)];
};

const generateCommentsCount = () => {
  return getRandomInteger(0, 5);
};


const generateFilm = () => {
  return {
    title: generateTitle(),
    rating: generateRating(),
    year: generateYear(),
    duration: generateDuration(),
    genre: generateGenre(),
    poster: generatePoster(),
    description: generateDescription(),
    commentsCount: generateCommentsCount(),
    isWatchlist: Boolean(getRandomInteger()),
    isWatched: Boolean(getRandomInteger()),
    isFavorite: Boolean(getRandomInteger())
  };
};

export const generateFilms = (count) => {
  return new Array(count).fill(``).map(generateFilm);
};

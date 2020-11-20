import {
  getRandomInteger,
  getRandomIndex,
  createRandomMassive
} from "./../utils/common.js";

import {generateComments} from "./comments.js";

const generateTitle = () => {
  const filmTitles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`,
    `Made for Each Other`,
  ];
  // const getRandomIndex = getRandomInteger(0, filmTitles.length - 1);
  return filmTitles[getRandomIndex(filmTitles)];
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

const generateGenres = () => {
  const genres = [
    `Musical`,
    `Western`,
    `Drama`,
    `Comedy`,
    `Cartoon`,
    `Mystery`,
    `Film-Noir`
  ];

  return createRandomMassive(genres, getRandomInteger(1,3));
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

  return `./images/posters/${posters[getRandomIndex(posters)]}`;
};

const generateDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  ];
  return descriptions[getRandomIndex(descriptions)];
};

const generateDirector = () => {
  const directors = [
    `Sofi Dir`,
    `Maggi Dir`,
    `Colin Dir`,
    `Trevor Dir`,
    `Anna Dir`,
    `Emma Dir`,
    `Clarck Dir`
  ];
  return directors[getRandomIndex(directors)];
};

const generateWriters = () => {
  const writers = [
    `Nathaniel Hawthorne`,
    `Edgar Allan Poe`,
    `Herman Melville`,
    `Walt Whitman`,
    `Emily Dickinson`,
    `Samuel Langhorne Clemens`,
    `Henry James`
  ];
  return createRandomMassive(writers, getRandomInteger(1,3));
};

const generateActores = () => {
  const actors = [
    `Bill Murray`,
    `Danny DeVito`,
    `Tom Hanks`,
    `Betty White`,
    `Robert Downey, Jr.`,
    `Julie Andrews`,
    `Reese Witherspoon`,
    `Liam Neeson`,
    `Kurt Russell`,
    `Drew Barrymore`,
    `Marilyn Monroe`,
    `Sally Field`,
    `Bruce Lee`,
    `Shirley Temple`,
    `Jennifer Aniston`,
    `Al Pacino`,
    `Hugh Jackman`
  ];

  return createRandomMassive(actors, getRandomInteger(3,6));
};

const generateReleaseDate = () => {

};

const generateCountries = () => {
  const countries = [
    `Japan `,
    `China `,
    `France `,
    `Germany `,
    `Spain`,
    `Emma`,
    `Italy `,
		`United Kingdom`,
		`USA`,
		`Russia`,
  ];
  return countries[getRandomIndex(countries)];
};


const isInUsersList = () => {
  const isInWatchlist = ()=> Boolean(getRandomInteger());
  const watchlist = isInWatchlist();
  const watched = watchlist ? false : Boolean(getRandomInteger());
  const favorite = watched ? Boolean(getRandomInteger()) : false;
  return {
    watchlist,
    watched,
    favorite
  };
};


const generateFilm = () => {
  const {
    watchlist,
    watched,
    favorite
  } = isInUsersList();
	const title = generateTitle();
  return {
    title: title,
    rating: generateRating(),
    year: generateYear(),
    duration: generateDuration(),
    genres: generateGenres(),
    poster: generatePoster(),
    description: generateDescription(),
    isWatchlist: watchlist,
    isWatched: watched,
    isFavorite: favorite,
		comments: generateComments(),

		age: getRandomInteger(0,18),
    titleOriginal: `${title} from first hand`,
    director:generateDirector(),
    writers:generateWriters(),
    actors:generateActores(),
    releaseDate:``,
    country:generateCountries(),
  };
};

export const generateFilms = (count) => {
  return new Array(count).fill(``).map(generateFilm);
};

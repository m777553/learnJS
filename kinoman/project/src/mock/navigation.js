const filmToNavigation = {
  'All movies': (films) => films.length,
  "Watchlist": (films) => films.filter((film)=>film.isWatchlist).length,
  "History": (films) => films.filter((film)=>film.isWatched).length,
  "Favorites": (films) => films.filter((film)=>film.isFavorite).length
};


export const generateNavigation = (films) => {

  return (
    Object.entries(filmToNavigation).map(([navName, countFilms]) => {
      let maches = navName.toLowerCase().match(/(\w+)/);
      let firstWord = maches[0];
      return {

        idFilm: firstWord,
        name: navName,
        count: countFilms(films),
      };
    })
  );
};

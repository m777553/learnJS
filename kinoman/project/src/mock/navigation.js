const filmToNavigation = {
  Watchlist: (films) => films.filter((film)=>film.isWatchlist).length,
  History: (films) => films.filter((film)=>film.isWatched).length,
  Favorites: (films) => films.filter((film)=>film.isFavorite).length
};


export const generateNavigation = (films) => {
  return (
    Object.entries(filmToNavigation).map(([navName, countFilms]) => {
      return {
        name: navName,
        count: countFilms(films),
      };
    })
  );
};

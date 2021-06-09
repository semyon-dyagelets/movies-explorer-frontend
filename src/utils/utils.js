import React from 'react';

function filterShortMovies(movies){
    return movies.filter((item) => item.duration < 40);
  };

function filterMovies(movies, searchQuery, shortFilms) {
    const moviesByQuery =  movies.filter((item) => {
      const strRu = String(item.nameRU).toLowerCase();
      const strEn = String(item.nameEN).toLowerCase();
      const searchStr = searchQuery.toLowerCase().trim();
      return (strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1);
    });
  
    if(shortFilms === 'on'){
      return filterShortMovies(moviesByQuery);
    }
    return moviesByQuery;
  };
  
function getSavedMovie(arr, id) {
    return arr.find((item) => {
      return item.movieId === id;
    });
}

function useWindowWidth() {
  const getWindowWidth = React.useCallback(() => window.innerWidth, []);
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {

    function handleResize() {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', resizeThrottler, false);

    let resizeTimeout;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          handleResize();
        }, 1500);
      }
    };
    
    return () => window.removeEventListener('resize', handleResize);
  }, [getWindowWidth]);

  return windowWidth;
};

function convertDurationToHHMM(duration) {
  const hours = Math.floor(duration / 60) ;
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`
}

function setDefaultImage(movies) {
  movies.forEach(movie => {
    if(!movie.image){
      movie.image = "https://pics.freeicons.io/uploads/icons/png/1981435991595452847-512.png";
    }
  });
};

export {
  filterShortMovies,
  filterMovies,
  getSavedMovie,
  useWindowWidth,
  setDefaultImage,
  convertDurationToHHMM,
}
const API_KEY = "bdebe7d14fc24a6847ee30691c05f9fd";
const BASE_URL = "https://api.themoviedb.org/3";

// function that fetch data from api and return the popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};


// Fuction that returns list of movies based on query passed as search
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

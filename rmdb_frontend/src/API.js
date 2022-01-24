// Config
import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "./config";

const apiSettings = {
  fetchMovies: (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => data);
  },

  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  fetchPerson: async (personId) => {
    const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  fetchPersonCredits: async (personId) => {
    const endpoint = `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;

import { useState, useEffect } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (search = "", page) => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(search, page);
      setState((prev) => ({
        ...movies,
        results:
          movies.page > 1
            ? [...prev.results, ...movies.results]
            : movies.results,
      }));
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoadMore) return;
    fetchMovies(searchTerm, state.page + 1);
    setIsLoadMore(false);
  }, [isLoadMore, searchTerm, state.page]);

  // Initial render
  useEffect(() => {
    console.log("Mounted");
    setState(initialState);
    setLoading(true);
    fetchMovies(`${searchTerm}`, 1);
  }, [searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadMore };
};

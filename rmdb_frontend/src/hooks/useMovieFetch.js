// API
import API from "../API";
// Hook
import { useState, useEffect } from "react";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setState({ ...movie, actors: credits.cast, directors });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [movieId]);

  return { state, loading, error };
};

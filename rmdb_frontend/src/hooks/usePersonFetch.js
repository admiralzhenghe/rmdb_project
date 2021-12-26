// API
import API from "../API";
// Hook
import { useState, useEffect } from "react";

export const usePersonFetch = (personId) => {
  const [person, setPerson] = useState({});
  const [credits, setCredits] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch the person's bio
        const person = await API.fetchPerson(personId);
        // Fetch the person's movie credits
        const credits = await API.fetchPersonCredits(personId);
        const actor = credits.cast;
        const director = credits.crew.filter(
          (movie) => movie.job === "Director"
        );
        const producer = credits.crew.filter(
          (movie) => movie.job === "Producer"
        );
        const writer = credits.crew.filter((movie) => movie.job === "Writer");

        setPerson({ ...person });
        setCredits({ actor, director, producer, writer });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [personId]);

  return [person, credits, loading, error];
};

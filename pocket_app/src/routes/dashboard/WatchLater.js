import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

export default function WatchLater(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const response = await axios.get('/api/titles/watchlater');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching watch later movies:', error);
      }
    };

    fetchWatchLater();
  }, []);

  return (
    <div className="watch-later-page">
      <h1>Movies to watch later</h1>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};


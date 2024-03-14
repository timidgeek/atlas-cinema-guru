import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './movies.css';

export default function MovieCard(props) {
  const { movie } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favoriteResponse = await axios.get('/api/titles/favorite');
        const watchLaterResponse = await axios.get('/api/titles/watchlater');
        const favoriteIds = favoriteResponse.data.map(title => title.imdbId);
        const watchLaterIds = watchLaterResponse.data.map(title => title.imdbId);
        setIsFavorite(favoriteIds.includes(movie.imdbId));
        setIsWatchLater(watchLaterIds.includes(movie.imdbId));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    const url = `/api/titles/${type}/${movie.imdbId}`;
    try {
      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(url);
        } else {
          await axios.post(url);
        }
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(url);
        } else {
          await axios.post(url);
        }
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error ${isFavorite ? 'removing from' : 'adding to'} ${type}:`, error);
    }
  };

  return (
    <li className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <div className="genres">
        {movie.genres.map((genre, index) => (
          <span key={index} className="genre">{genre}</span>
        ))}
      </div>
      <div className="actions">
        <FontAwesomeIcon
          icon={faHeart}
          className={isFavorite ? 'active' : ''}
          onClick={() => handleClick('favorite')}
        />
        <FontAwesomeIcon
          icon={faClock}
          className={isWatchLater ? 'active' : ''}
          onClick={() => handleClick('watchlater')}
        />
      </div>
    </li>
  );
};



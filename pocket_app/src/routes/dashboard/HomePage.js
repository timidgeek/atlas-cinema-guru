import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/Button';
import './dashboard.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page]);

  const loadMovies = async (pageNumber) => {
    try {
      const response = await axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres,
          title,
          sort,
          page: pageNumber,
        },
      });
      setMovies(prevMovies => [...prevMovies, ...response.data]);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="home-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
      <Button onClick={handleLoadMore}>Load More..</Button>
    </div>
  );
};

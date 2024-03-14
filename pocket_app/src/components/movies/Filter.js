import React from 'react';
import Tag from './Tag';
import './movies.css';

export default function Filter(props) {
  const { minYear,
          setMinYear,
          maxYear,
          setMaxYear,
          sort,
          setSort,
          genres,
          setGenres,
          title,
          setTitle } = props;

  return (
    <div className="filter">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Search by title"
      />
      <input
        type="number"
        value={minYear}
        onChange={e => setMinYear(parseInt(e.target.value))}
        placeholder="Min Year"
      />
      <input
        type="number"
        value={maxYear}
        onChange={e => setMaxYear(parseInt(e.target.value))}
        placeholder="Max Year"
      />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="highestrated">Highest Rated</option>
        <option value="lowestrated">Lowest Rated</option>
      </select>
      <ul>
        {['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'].map((genre, index) => (
          <Tag
            key={index}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
};


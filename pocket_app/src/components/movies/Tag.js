import React, { useState } from 'react';
import './movies.css';

export default function Tag(props) {
  const { genre, 
          filter, 
          genres, 
          setGenres } = props;
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      const updatedGenres = genres.filter(g => g !== genre);
      setGenres(updatedGenres);
    } else {
      setGenres([...genres, genre]);
    }
    setSelected(!selected);
  };

  return (
    <li onClick={handleTag} className={selected ? 'selected' : ''}>
      {genre}
    </li>
  );
};


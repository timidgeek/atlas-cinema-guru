// functional imports
import React from 'react';
import PropTypes from 'prop-types';

// css files
import './general.css';

export default function SearchBar(props) {
  // destructure props
  const { title, setTitle } = props;

  const handleInput = (e) => {
    setTitle(e.target.value);
  }

    return (
      <div>
        <input
          title={title}
          onChange={handleInput}
        />
      </div>
    )
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.string.isRequired
}
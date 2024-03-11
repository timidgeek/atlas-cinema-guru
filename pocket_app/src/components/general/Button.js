// functional imports
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

// css files
import './general.css';

export default function Button(props) {
  // destructure props
  const {label,
         className, 
         onClick,
         icon} = props;

    return (
      <div>
        <button
          className={className}
          onClick={onClick}
        >
          {label}
          {icon && <FontAwesomeIcon icon={icon} />}
        </button>
      </div>
    )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired, 
  icon: PropTypes.element, 
}
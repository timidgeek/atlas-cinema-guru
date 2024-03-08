// functional imports
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// css files
import './general.css';

export default function Input(props) {
  // destructure props
  const {label, 
         type, 
         className, 
         value, 
         setValue, 
         icon, 
         inputAttributes} = props;

  const handleInput = (e) => {
    setValue(e.target.value);
  }

    return (
      <div>
        <label>{label}</label>
        {icon && <FontAwesomeIcon icon={icon} /> /* if icon exists, && render it */}
        <input
          type={type}
          className={className}
          value={value}
          onChange={handleInput}
          {...inputAttributes /* spread to allow additional attributes to be passed */}
        />
      </div>
    )
}

Input.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired, 
  className: PropTypes.string.isRequired, 
  value: PropTypes.node.isRequired, 
  setValue: PropTypes.func.isRequired, 
  icon: PropTypes.element, 
  inputAttributes: PropTypes.object
}
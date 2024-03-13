// functional imports
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// css files
import './general.css';
import '../../routes/auth/auth.css';

export default function Input(props) {
  // destructure props
  const {label, 
         type, 
         className, 
         value, 
         setValue, 
         icon, 
         inputAttributes,
          placeholder} = props;

  function handleInput(e) {
    setValue(e.target.value);
  }

    return (
      <div>
        {icon && <FontAwesomeIcon icon={icon} className="babyPink" />}
        <label className="label">{label}</label>
        <input
          placeholder={placeholder}
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
  label: PropTypes.string, 
  type: PropTypes.string, 
  className: PropTypes.string, 
  value: PropTypes.node, 
  setValue: PropTypes.func,
  inputAttributes: PropTypes.object
}
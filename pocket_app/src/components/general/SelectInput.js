// functional imports
import React from 'react';
import PropTypes from 'prop-types';

// css files
import './general.css';

export default function SelectInput(props) {
  // destructure props
  const {label,
         options,
         className, 
         value, 
         setValue} = props;

  const handleInput = (e) => {
    setValue(e.target.value);
  }

    return (
      <div>
        <label>{label}</label>
        <select
          className={className}
          value={value}
          onChange={handleInput}
        >
          {/* map over options and create option elements */}
          {options && options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired, 
  options: PropTypes.array.isRequired, 
  className: PropTypes.string.isRequired, 
  value: PropTypes.node.isRequired, 
  setValue: PropTypes.func.isRequired
}
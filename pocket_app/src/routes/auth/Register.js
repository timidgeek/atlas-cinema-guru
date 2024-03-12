// functional imports
import React from 'react';
import PropTypes from 'prop-types';

// component imports
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

// css imports
import './auth.css';


export default function Register(props) {
  // destructure props
  const { username,
          password,
          setUsername,
          setPassword } = props;

    return (
      <div className="flexbox">
        <h2>Create a new account</h2>
        <div className="inputBox">
          <Input 
            className="input"
            icon={faUser}
            placeholder="Username: "
            value={username} 
            setValue={setUsername} />
          <Input           
            className="input"
            type={password}
            icon={faKey}
            placeholder="Password: " 
            value={password} 
            setValue={setPassword} />
        </div>
        <div>      
          <Button 
            className="submitButton"
            icon={faPlus}
            label=" Sign Up" />
        </div>
      </div>
    )
}

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
}
  

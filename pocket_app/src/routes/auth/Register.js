// functional imports
import React from 'react';
import PropTypes from 'prop-types';

// component imports
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

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
      <div>
        <Input 
          icon={faUser}
          placeholder="Username: "
          value={username} 
          onChange={setUsername} />
        <Input 
          icon={faKey}
          placeholder=" Password: " 
          value={password} 
          onChange={setPassword} />
      </div>
      <div>      
        <Button 
          icon={faKey}
          label="Sign Up" 
          className="signInButton" />
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
  

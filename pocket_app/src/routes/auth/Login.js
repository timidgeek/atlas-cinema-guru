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


export default function Login(props) {
  // destructure props
  const { username,
          password,
          setUsername,
          setPassword } = props;

  return (
    <div className="center">
      <div className="flexbox">
      <h2>Sign in with your account</h2>
      <div className="inputBox">
        <Input 
          className="input"
          icon={faUser}
          placeholder="Username"
          value={username} 
          setValue={setUsername} />
        <Input           
          className="input"
          type={password}
          icon={faKey}
          placeholder="Password" 
          value={password} 
          setValue={setPassword} />
      </div>
      <div>      
        <Button 
          className="submitButton"
          icon={faKey}
          label=" Sign In" />
      </div>
    </div>
  </div>
    
  )
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func
}
  

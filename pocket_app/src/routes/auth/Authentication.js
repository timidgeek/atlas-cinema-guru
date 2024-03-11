// functional imports
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

// component imports
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

// css imports
import './app.css';


export default function Authentication(props) {
  // destructure props
  const { setIsLoggedIn, setUserUsername } = props;

  // define state variables
  const [_switch, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      {_switch ? <Login /> : <Register />}

      <Button label="Sign In" onClick={() => setSwitchState(true)} />
      <Button label="Sign Up" onClick={() => setSwitchState(false)}/>
    </form>
  )
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserUsername: PropTypes.func.isRequired
}
  

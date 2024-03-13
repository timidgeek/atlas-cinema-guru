// functional imports
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

// component imports
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

// css imports
import './auth.css';


export default function Authentication(props) {
  // destructure props
  const { setIsLoggedIn, setUserUsername } = props;

  // define state variables
  const [_switch, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (onSubmit) => {
    onSubmit.preventDefault();

    const route = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
    console.log({ username, password });

    try {
      const response = await axios.post(route, { username, password });

      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        console.log(typeof setUserUsername);
        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      }
  };

  // define functions
  // const handleSubmit = (onSubmit) => {
  //   onSubmit.preventDefault();

  //   const data = { username, password };

  //   let route = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';

  //   axios.post(route, data)
  //   .then(response => {
  //     const token = response.data;
  //     localStorage.setItem('accessToken', token);
  //     setUserUsername(username);
  //     setIsLoggedIn(true);
  //   })
  //   .catch(error => {
  //     console.error('Error signing up:', error);
  //     console.error('Authentication Error:', error.response ? error.response.data : error)
  //   })
  // }

  return (

    <form onSubmit={handleSubmit}>
      <div className="signBtnsFlex">
        <Button 
          className="signBtns"
          label="Sign In" 
          onClick={() => setSwitchState(true)} />
        <Button 
          className="signBtns"
          label="Sign Up" 
          onClick={() => setSwitchState(false)} />
      </div>
      {_switch ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} /> : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}
    </form>
  )
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserUsername: PropTypes.func.isRequired
}
  

// functional imports
import React from 'react';
import PropTypes from 'prop-types';

// component imports
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

// css imports
import './app.css';


export default function Register(props) {
  // destructure props
  const { username,
          password,
          setUsername,
          setPassword } = props;

  return (
    <div>
      <Input label="username" value={username} onChange={setUsername} />
      <Input label="password" value={password} onChange={setPassword} />
      <Button label="Submit" />
    </div>
  )
}

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
}
  

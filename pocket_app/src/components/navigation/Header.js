// functional imports
import React from "react";
import PropTypes from 'prop-types';

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

// css imports
import './navigation.css';

export default function Header(props) {
  // destructure props
  const { userUsername, setIsLoggedIn } = props;

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <nav>
      <p>Cinema Guru</p>
      <ul>
        <li>
          <img src="https://picsum.photos/100/100" alt="random-avatar"></img>
        </li>
        <li><p>Welcome, {userUsername}!</p></li>
        <li>
      <span onClick={logout}> 
        <FontAwesomeIcon icon={faSignOut} />
        Logout
      </span></li>
      </ul>
    </nav>
  )
}

Header.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}
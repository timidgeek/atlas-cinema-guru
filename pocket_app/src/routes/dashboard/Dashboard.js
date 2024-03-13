// functional imports
import React from "react";
import PropTypes from 'prop-types';

// component imports
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

// css imports
import './dashboard.css';
export default function Dashboard(props) {
  // destructure props
  const { userUsername, setIsLoggedIn } = props;

 return (
  <div>
    <Header
      userUsername={userUsername} 
      setIsLoggedIn={setIsLoggedIn} />
    <SideBar />
  </div>
 )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}
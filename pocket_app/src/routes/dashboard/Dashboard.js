// functional imports
import React from "react";
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// component imports
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

// css imports
import './dashboard.css';
export default function Dashboard(props) {
  // destructure props
  const { userUsername, setIsLoggedIn } = props;

 return (
  <BrowserRouter>
    <div>
      <Header
        userUsername={userUsername} 
        setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    </div>
  </BrowserRouter>
 )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}
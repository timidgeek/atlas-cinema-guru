// functional imports
import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolder, faStar } from "@fortawesome/free-solid-svg-icons";

// component imports
import Activity from "../components/Activity";

// css imports
import "./navigation.css";

export default function SideBar() {
  // define state variables
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  // define functions
  const setPage = (pageName) => {
    const routes = {
      'Home': '/home',
      'Favorites': '/favorites',
      'Watch Later': '/watchlater'
    };

    setSelected(pageName);
    navigate(routes[pageName]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/activity');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="navigation">
      <ul>
        <li onClick={() => setPage('Home')} className={selected === 'Home' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faFolder} />
          <NavLink to="/home">Home</NavLink>
        </li>
        <li onClick={() => setPage('Favorites')} className={selected === 'Favorites' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faStar} />
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li onClick={() => setPage('Watch Later')} className={selected === 'Watch Later' ? 'selected' : ''}>
        <FontAwesomeIcon icon={faClock} />
          <NavLink to="/watchlater">Watch Later</NavLink>
        </li>
      </ul>
      {showActivities && (
        <ul className="activity">
          {activities.slice(0, 10).map(activity => (
            <li key={activity.id}>
              <Activity {...activity} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

SideBar.propTypes = {
  selected: PropTypes.string,
  small: PropTypes.bool, 
  activities: PropTypes.array, 
  showActivities: PropTypes.bool
}

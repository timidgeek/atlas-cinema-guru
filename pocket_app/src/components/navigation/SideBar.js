// functional imports
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";

// icon imports
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
  
  const toggleSidebar = () => {
    setSmall(!small);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/activity');
        setActivities(response.data);
        setShowActivities(true);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <nav className="sidebarNav" onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <ul>
        <li 
          onClick={() => setPage('Home')} 
          className={selected === 'Home' ? 'selected' : ''}>
            <FontAwesomeIcon icon={faFolder} className="iconPadding" />
            <NavLink to="/home">Home</NavLink>
        </li>
        <li 
          onClick={() => setPage('Favorites')} 
          className={selected === 'Favorites' ? 'selected' : ''}>
            <FontAwesomeIcon icon={faStar} className="iconPadding" />
            <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li 
          onClick={() => setPage('Watch Later')} 
          className={selected === 'Watch Later' ? 'selected' : ''}>
            <FontAwesomeIcon icon={faClock} className="iconPadding" />
            <NavLink to="/watchlater">Watch Later</NavLink>
        </li>
      </ul>
      {showActivities && (
        <ul className="activities">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity
                key={index}
                userUsername={activity.userUsername}
                title={activity.title}
                date={activity.date}
                  />
          ))}
        </ul>
      )}
    </nav>

  )
}

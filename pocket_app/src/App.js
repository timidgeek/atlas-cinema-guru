// functional imports
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// component imports
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import Header from './components/navigation/Header';

// css imports
import './App.css';

function App() {
  const options = [
    { value: 'Default', label: 'Default' },
    { value: 'Latest', label: 'Latest' },
    { value: 'Oldest', label: 'Oldest' },
    { value: 'Highest Rated', label: 'Highest Rated' },
    { value: 'Lowest Rated', label: 'Lowest Rated' }
  ];

  // define state variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    // function to execute on component mount
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if (accessToken) {
      axios.post('http://localhost:8000/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        // on success, set isLoggedIn to true and userUsername to the username from the response object
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(error => {
        // handle error
        console.error('Error fetching user data:', error);
      });
    }
  }, []); 

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;

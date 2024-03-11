// functional imports
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// component imports
import Button from './components/general/Button';
import Input from './components/general/Input';
import SearchBar from './components/general/SearchBar';
import SelectInput from './components/general/SelectInput';
import Authentication from './routes/auth/Authentication';

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
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          // send a post request to /api/auth/ with the authorization header set to Bearer <accessToken>
          const response = await axios.post('/api/auth/', {}, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          // on success, set isLoggedIn to true and userUsername to the username from the response object
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        } catch (e) {
          console.error('Error fetching user data:', e);
        }
      }
    };

    fetchData();
  }, []); // empty dependency array ensures the effect runs only once on mount

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
      <Input />
      <SelectInput options={options}/>
      <Button label="Load More..." className="custom-button" />
      <SearchBar />
    </div>
  );
}

export default App;

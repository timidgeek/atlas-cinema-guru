// functional imports
import React from 'react';
import { useState } from 'react';

// component imports
import Button from './components/general/Button';
import Input from './components/general/Input';
import SearchBar from './components/general/SearchBar';
import SelectInput from './components/general/SelectInput';

// css imports
import './App.css';

function App() {
  const options = [
    { value: 'Default', label: 'Default' },
    { value: 'Latest', label: 'Latest' },
    { value: 'Oldest', label: 'Oldest' },
    { value: 'Highest Rated', label: 'Highest Rated' },
    { value: 'Lowest Rated', label: 'Lowest Rated' }
  ]

  return (
    <div className="App">
      <Input />
      <SelectInput options={options}/>
      <Button label="Load More..." className="custom-button" />
      <SearchBar />
    </div>
  );
}

export default App;

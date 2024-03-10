// functional imports
import React from 'react';
import Button from './components/general/Button';
import Input from './components/general/Input';
import SearchBar from './components/general/SearchBar';
import SelectInput from './components/general/SelectInput';

// css imports
import './App.css';

function App() {
  return (
    <div className="App">
      <Input />
      <SelectInput />
      <Button />
      <SearchBar />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Nav from './nav/nav';
import Results from './results/results';
import requests from './requests/requests';

function App() {

  const [selectdOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectdOption} />
    </div>
  );
}

export default App;

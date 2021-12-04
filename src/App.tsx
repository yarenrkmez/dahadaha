import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Brands from './components/Brands/Brands';
import Opportunities from './components/Opportunities/Opportunities';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Brands />
      <Opportunities />
    </div>
  );
}

export default App;

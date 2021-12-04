import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Brands from './components/Brands/Brands';
import Opportunities from './components/Opportunities/Opportunities';
import BottomNavbar from './components/Navbar/BottomNavbar';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex',flexDirection:'column'}}>
        <Navbar />
        <Brands />
        <Opportunities />
        <BottomNavbar />
      </div>



    </div>
  );
}

export default App;

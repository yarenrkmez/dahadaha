import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Brands from './components/Brands/Brands';
import Opportunities from './components/Opportunities/Opportunities';
import BottomNavbar from './components/Navbar/BottomNavbar';
import { Switch, Route } from "react-router-dom";
import OpportunitySingle from './components/Opportunities/OpportunitySingle';

function App() {
  return (
    <div className="App" id="App">
      <div >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kampanya" component={OpportunitySingle} />
          {/* <Route
            path="/users/:id"
            render={({ match }) => (
              <User id={match.params.id} />
            )}
          /> */}
        </Switch>

      </div>



    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Brands />
      <Opportunities />
      <BottomNavbar />
    </div>
  );
}
export default App;

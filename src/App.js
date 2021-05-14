import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Mentors from './pages/mentors';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/index' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/mentors' exact component={Mentors} />
            <Route path='/team' exact component={Team} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

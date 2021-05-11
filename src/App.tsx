import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MainNav from './components/ui/nav/MainNav'

// routes
import HomeDashboard from './pages/HomeDashboard'
import DataDefinitions from './pages/DataDefinitions'
import Notebooks from './pages/Notebooks'
import Dashboards from './pages/Dashboards'

import './App.css';

function App() {
  return (
    <Router>
    <MainNav />    
      <Switch>
      <Route exact path="/">
        <HomeDashboard />
      </Route>
      <Route path="/mydata">
        <DataDefinitions />
      </Route>
      <Route path="/notebooks">
        <Notebooks />
      </Route>
      <Route path="/dashboards">
        <Dashboards />
      </Route>
      </Switch>      
    </Router>
    
    
    
  );
}

export default App;

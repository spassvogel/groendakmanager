import Login from 'components/pages/Login/Login';
import Overview from 'components/pages/Overview';
import React from 'react';
import { Route, Switch } from 'wouter';
import './app.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Overview />
        </Route> 
      </Switch>
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Switch>
     <Route component={MainPage} exact path='/' />
      </Switch>
    </Router>
  );
}

export default App;

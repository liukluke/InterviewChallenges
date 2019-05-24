import React from 'react';
import './App.css';
import Phones from './components/phones/Phones';
import { Switch, Route } from 'react-router-dom';
import PhoneInfo from './components/phones/PhoneInfo';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Phones} />
        <Route exact path='/:name' component={PhoneInfo} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

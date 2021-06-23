import React from 'react'
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './components/pages/Main'
import Login from './components/pages/Login'
import Entries from './components/pages/Entries'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/entries" component={Entries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

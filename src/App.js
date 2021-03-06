import React, { useState } from 'react'
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/pages/Main'
import Login from './components/pages/Login'
import Entries from './components/pages/Entries'
import CreateUser from './components/pages/CreateUser'
import Admin from './components/pages/Admin'

function App() {

  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login 
            auth={auth}
            setAuth={setAuth}
          />
        </Route>
        <Route exact path="/entries">
          <Entries 
            auth={auth}
            setAuth={setAuth}
          />
        </Route>
        <Route exact path="/admin">
          <Admin 
            auth={auth}
            setAuth={setAuth}
          />
        </Route>
        <Route exact path="/create-user">
          <CreateUser 
            auth={auth}
            setAuth={setAuth}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

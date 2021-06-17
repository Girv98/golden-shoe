//import './sass/mystyles.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';


// Pages
import Home from './pages/Home';
import Basket from './pages/Basket';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Home/>
          </MainLayout>
        )} />
        <Route exact path="/basket" render={() => (
          <MainLayout>
            <Basket/>
          </MainLayout>
        )} />
        <Route exact path="/account" render={() => (
          <MainLayout>
            <Account/>
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;

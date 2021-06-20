//import './sass/mystyles.scss';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';

// Layouts
import MainLayout from './layouts/MainLayout';


// Pages
import Home from './pages/Home';
import Basket from './pages/Basket';
import Account from './pages/Account';


const initialState = {
  currentUser: null
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {  
    const { currentUser } = this.state;


    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Home currentUser={currentUser}/>
            </MainLayout>
          )} />
          <Route exact path="/basket" render={() => (
            <MainLayout>
              <Basket currentUser={currentUser}/>
            </MainLayout>
          )} />
          <Route exact path="/account" render={() => (
            <MainLayout>
              <Account currentUser={currentUser}/>
            </MainLayout>
          )} />
        </Switch>
      </div>
    );

  }
}

export default App;

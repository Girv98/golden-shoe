//import './sass/mystyles.scss';
import React, { Component} from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

// Layouts
import MainLayout from './layouts/MainLayout';


// Pages
import Home from './pages/Home';
import Basket from './pages/Basket';
import Account from './pages/Account';
import ProductPage from './pages/ProductPage';

class App extends Component {
  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  
  
  render() {  

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )} />
          <Route exact path="/basket" render={() => (
            <MainLayout>
              <Basket />
            </MainLayout>
          )} />
          <Route exact path="/account" render={() => (
            <MainLayout>
              <Account />
            </MainLayout>
          )} />
          <Route exact path="/product/:productID" render={() => (
            <MainLayout>
              <ProductPage />
            </MainLayout>
          )} />
        </Switch>
      </div>
    );

  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

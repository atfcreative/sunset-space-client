import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom'; //Redirect
import jwt_decode from 'jwt-decode';
import NavBar from './components/navbar/NavBar';
import LoginForm from './components/forms/LogInForm';
import SignUpForm from './components/forms/SignUpForm';
import ProfilePage from './components/pages/ProfilePage';
import UsersList from './components/pages/UsersList';
import About from './components/pages/about/About';
import Plans from './components/pages/Plans';
import Landing from './components/pages/landing/Landing';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  state = {
    currentUser: {},
    isAuthenticated: true
  }

componentDidMount() {
  let token;
  if(localStorage.getItem('jwtToken') === null) {
    this.setState({ isAuthenticated: false });
  }else{
    token = jwt_decode(localStorage.getItem('jwtToken'));
    this.setState({ currentUser: token, isAuthenticated: true });
  };
  // console.log(this.state)
};

componentWillUnmount() {
  clearInterval(this.setState);
}

setCurrentUser = (userData) => {
  this.setState({ currentUser: userData, isAuthenticated: true });
};

// handleLogIn = () => {
//   console.log('Log in Clicked...');
// };

// handleSignUp = () => {
//   console.log('Sign Up Clicked...');
// };

handleLogout = () => {
  // console.log(`someone clicked logout, what the...`)
  if (localStorage.getItem('jwtToken') !== null ) {
    localStorage.removeItem('jwtToken');
    this.setState({ currentUser: null, isAuthenticated: false });
  };
};

  render() {
    console.log('is Authenticated?: ', this.state.isAuthenticated, );
    console.log(this.state.currentUser);

    // const PrivateRoute = ({component: Component, ...rest}) => (
    //   <Route {...rest} render={(props) => (
    //     this.state.isAuthenticated === true
    //     ? <Component {...props} />
    //     : <Redirect to='/signin' />
    //   )} />
    // )

    return (
      <div>
        <NavBar isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout}  />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/signin' render={(props) => <LoginForm {...props} setCurrentUser={this.setCurrentUser} />} />
          <Route exact path='/register' component={SignUpForm} />
          {/* <PrivateRoute exact path='/profile' component={ProfilePage} /> */}
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/users' component={UsersList} />
          <Route exact path='/about' component={About} />
          <Route exact path='/plans' component={Plans} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

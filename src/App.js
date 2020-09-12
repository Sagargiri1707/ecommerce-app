import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css'
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser:null
    }
  }

  unSubscribeFromAuth=null

  componentDidMount() {
   this.unSubscribeFromAuth= auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
      
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/signin" component={SignInSignUp}/>
          </Switch>
    
  </div>)}
}

export default App;

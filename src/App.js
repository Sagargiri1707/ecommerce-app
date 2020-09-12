import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(Snapshot => {
          this.setState({
            currentUser:{
            id: Snapshot.id,
              ...Snapshot.data()
            }
          })
        })
      }
      else {
        this.setState({currentUser:userAuth})
      }
      
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

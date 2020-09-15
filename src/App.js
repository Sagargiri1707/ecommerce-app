import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch ,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Checkout from './pages/checkout/checkout.component';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import {setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

  unSubscribeFromAuth=null

  componentDidMount() {
    const { setCurrentUser }=this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(Snapshot => {
          console.log(Snapshot)
          setCurrentUser({
            currentUser:{
              id: Snapshot.id,
                ...Snapshot.data()
              }
          })
         
          
        })
      }
      else {
        console.log(userAuth)
        setCurrentUser(userAuth)
      }
      
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render(){
  return (
    <div>
      <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/shop" exact component={Shop} />
            <Route exact path="/signin" render={() => 
              this.props.currentUser ?
                (<Redirect to="/" />)
                : (<SignInSignUp />)
            } />
            <Route path="/checkout" component={Checkout}/>
          </Switch>
    
  </div>)}
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
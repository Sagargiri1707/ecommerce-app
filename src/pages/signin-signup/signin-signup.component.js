import React from 'react';
import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

import './signin-signup.style.scss'
function SignInSignUp(props) {
    return (
        <div className="sign-in-sign-up">
            <Signin />
            <Signup/>
        </div>
    );
}

export default SignInSignUp;
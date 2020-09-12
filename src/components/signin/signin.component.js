import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
 
import './signin.style.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }
    submitForm = (e) => {
        e.preventDefault()
        this.setState({
            email: '',
            password:''
        })
    }
    handleChange = e => {
        const { value, name } = e.target
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Signin with your email and password</span>
                <form onSubmit={this.submitForm}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        label='email'
                        required />
                        
                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign in with google{' '}
                        </CustomButton>
                    </div>
                    
                </form>
                
            
            </div>
        );
    }
}


export default Signin;
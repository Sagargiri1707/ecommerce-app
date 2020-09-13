import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss'
class Signup extends Component {

    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    
    handleSubmit = async event => {
        
        event.preventDefault()
        const { email,password,displayName,confirmPassword}=this.state
        if (password !== confirmPassword){
            alert("passwor dont match")
        return
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName: '',
            email: '',
            password: '',
            confirmPassword:''
            })
        }
        catch (error) {
            console.log('error')
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>Signup with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Enter email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Enter password'
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm password'
                        required
                    />


                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup;
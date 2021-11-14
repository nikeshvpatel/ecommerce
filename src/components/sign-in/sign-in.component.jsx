import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (e) {
            console.log(e.message);
        }
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' value={this.state.email} label='email'
                               handleChange={this.handleChange}
                               required/>
                    <FormInput type="password" name='password' label='password' value={this.state.password}
                               handleChange={this.handleChange}
                               required/>
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>

            </div>
        );
    }

}

export default SignIn;
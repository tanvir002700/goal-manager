import React, {Component} from 'react';
import {firebaseApp} from '../config/firebase';
import {Link} from 'react-router';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            });
    }
    render() {
        return(
            <div className="form-inline">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input type="password" className="form-control" placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button className="btn btn-primary" type="button"
                        onClick={() => this.signUp()}
                    >Sign up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/sign_in'}>Sign In instead.</Link></div>
            </div>
        );
    };
}

export default SignUp;
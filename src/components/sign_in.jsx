import React, {Component} from 'react';
import {firebaseApp} from '../config/firebase';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import '../assets/stylesheets/paper.css';

class SignIn extends Component {
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

    signIn() {
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
               this.setState({error});
            });
    }

    render() {
        return(
            <Paper className="canvas" zDepth={5}>
                <div className="form-inline">
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="email"
                               onChange={event => this.setState({email: event.target.value})}
                        />
                        <input type="password" className="form-control" placeholder="password"
                               onChange={event => this.setState({password: event.target.value})}
                        />
                        <RaisedButton label="Sign In" primary={true} onTouchTap={() => this.signIn()}/>
                    </div>
                    <div>{this.state.error.message}</div>
                    <div><Link to={'/sign_up'}> Sign Up instead. </Link></div>
                </div>
            </Paper>
        );
    };
}

export default SignIn;
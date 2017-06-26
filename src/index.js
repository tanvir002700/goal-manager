import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {firebaseApp} from './config/firebase';
import App from './components/app';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import Redux from 'redux';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log('user is signed in or up ', user);
        browserHistory.push('/app');
    } else {
        console.log('user not found.');
        browserHistory.replace('/sign_in');
    }
});

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path='/app' component={App}/>
        <Route path='sign_in' component={SignIn}/>
        <Route path='sign_up' component={SignUp}/>
    </Router>, document.getElementById('root')
);
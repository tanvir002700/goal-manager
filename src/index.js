import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {firebaseApp} from './config/firebase';
import App from './components/app';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import allReducers from './reducers';
import {logUser} from './actions/signed_in';

const store = createStore(allReducers);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log('user is signed in or up ', user);
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        console.log('user not found.');
        browserHistory.replace('/sign_in');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path='/app' component={App}/>
            <Route path='sign_in' component={SignIn}/>
            <Route path='sign_up' component={SignUp}/>
        </Router>
    </Provider>, document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {firebaseApp} from './config/firebase';
import App from './components/app';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import allReducers from './reducers';
import {logUser} from './actions/signed_in';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AddGoal from './components/add_goal';
import GoalList from './components/goal_list';
import CompleteGoalLists from './components/complete_goal_lists';
import UserDetails from './components/user_details';

const store = createStore(allReducers);

injectTapEventPlugin();

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        browserHistory.replace('/sign_in');
    }
});


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router path="/" history={browserHistory}>
                <Route path='app' component={App}>
                    <IndexRoute component={UserDetails}></IndexRoute>
                    <Route path="add_goal" components={AddGoal}/>
                    <Route path='goal_list' component={GoalList}/>
                    <Route path='complete_goal_lists' component={CompleteGoalLists}/>
                </Route>
                <Route path='sign_in' component={SignIn}/>
                <Route path='sign_up' component={SignUp}/>
            </Router>
        </Provider>
    </MuiThemeProvider>, document.getElementById('root')
);
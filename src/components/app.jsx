import React, {Component} from 'react';
import {firebaseApp} from '../config/firebase';
import Paper from 'material-ui/Paper';
import Layout from './layout';


class App extends Component {

    render() {
        return(
            <div>
                <Layout/>
                {this.props.children}
                {/*<h2>Goal</h2>*/}
                {/*{this.renderUserDetails()}*/}
                {/*<AddGoal/>*/}
                {/*<GoalList/>*/}
                {/*<CompleteGoalLists/>*/}
            </div>
        );
    };
}

export default App;
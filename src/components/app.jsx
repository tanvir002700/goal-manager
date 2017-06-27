import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../config/firebase';
import AddGoal from './add_goal';
import GoalList from './goal_list';
import CompleteGoalLists from './complete_goal_lists';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    renderUserDetails() {
        const {user} = this.props;
        return(
            <div>email: {user.email}</div>
        );
    }

    render() {
        return(
            <div>
                <h2>Goal</h2>
                {this.renderUserDetails()}
                <AddGoal/>
                <GoalList/>
                <CompleteGoalLists/>
                <button type="button" className="btn btn-danger"
                    onClick={() => this.signOut()}
                >Sign Out</button>
            </div>
        );
    };
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(App);
import React, {Component} from 'react';
import {completeGoalRef, goalRef} from '../config/firebase';
import {connect} from 'react-redux';

class GoalItem extends Component {
    completeGoal() {
        const {user} = this.props;
        const {goal} = this.props;
        console.log(goal);
        goalRef.child(goal.serverKey).remove();
        completeGoalRef.push({completedBy: user, goal: goal});
    }

    render() {
        console.log('goal item props: ', this.props);
        const {goal} = this.props;
        return(
            <div>
                <div> Title: {goal.goal}</div>
                <div>Submit By: {goal.owner.email}</div>
                <button type="button" className="btn btn-success"
                    onClick={() => this.completeGoal()}
                >Complete</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    };
}
export default connect(mapStateToProps, null)(GoalItem);
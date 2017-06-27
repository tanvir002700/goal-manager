import React, {Component} from 'react';

class CompleteGoalItem extends Component {

    render() {
        const {completeGoal} = this.props;
        return(
            <div>
                <div> Title: {completeGoal.goal.goal}</div>
                <div>Completed By: {completeGoal.completedBy.email}</div>
            </div>
        );
    }
}

export default CompleteGoalItem;
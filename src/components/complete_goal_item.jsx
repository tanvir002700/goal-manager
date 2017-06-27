import React, {Component} from 'react';

class CompleteGoalItem extends Component {

    render() {
        console.log('goal item props: ', this.props);
        const {completeGoal} = this.props;
        console.log('Complete Goal Item in complete item: ', completeGoal);
        return(
            <div>
                <div> Title: {completeGoal.goal.goal}</div>
                <div>Completed By: {completeGoal.completedBy.email}</div>
            </div>
        );
    }
}

export default CompleteGoalItem;
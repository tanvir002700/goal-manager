import React, {Component} from 'react';
import {goalRef} from '../config/firebase';
import {connect} from 'react-redux';
import {setGoal} from '../actions/set_goal_action';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let goalObject = goal.val();
                console.log(goalObject);
                goals.push(goalObject);
            });
            this.props.setGoal(goals);
        });
    }

    render() {
        console.log('Goals from props: ', this.props.goals);
        return(
            <div>Goal List...</div>
        );
    }
}

function mapStateToProps(state) {
    const {goals} = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, {setGoal})(GoalList);
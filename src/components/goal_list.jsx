import React, {Component} from 'react';
import {goalRef} from '../config/firebase';
import {connect} from 'react-redux';
import {setGoal} from '../actions/set_goal_action';
import GoalItem from './goal_item';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let goalObject = goal.val();
                let serverKey = goal.key;
                goalObject['serverKey'] = serverKey;
                goals.push(goalObject);
            });
            this.props.setGoal(goals);
        });
    }

    render() {
        return(
            <div>
                <h2>Goal List</h2>
                {
                    this.props.goals.map((goal, key) => {
                        return <GoalItem key={key} goal={goal}/>
                    })
                }
            </div>
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
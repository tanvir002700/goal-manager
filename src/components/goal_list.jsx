import React, {Component} from 'react';
import {goalRef} from '../config/firebase';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let goalObject = goal.val();
                console.log(goalObject);
                goals.push(goalObject);
            });
        });
    }

    render() {
        return(
            <div>Goal List...</div>
        );
    }
}

export default GoalList;
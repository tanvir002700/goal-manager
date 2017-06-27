import React, {Component} from 'react';
import {connect} from 'react-redux';
import CompleteGoalItem from './complete_goal_item';
import {setCompleted} from '../actions/set_completed_action';
import {completeGoalRef} from '../config/firebase';

class CompleteGoalLists extends Component {
    componentDidMount() {
        completeGoalRef.on('value', snap => {
           let completeGoals = [];
           snap.forEach(completeGoalRef => {
               console.log('Each ', completeGoalRef.val());
               const {completedBy, goal} = completeGoalRef.val();
               completeGoals.push({completedBy, goal});
           });
           console.log("complete goals: ",completeGoals);
           console.log('props: ', this.props);
           this.props.setCompleted(completeGoals);
        });
    }

    render() {
        console.log("props in complete goal list: ", this.props);
        const {completeGoals} = this.props;
        return(
            <div>
                <h2>Complete Goal List</h2>
                {
                    completeGoals.map(completeGoal => {
                        return <CompleteGoalItem completeGoal={completeGoal}/>
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        completeGoals: state.completeGoals
    }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalLists);
import {SET_GOALS} from '../constants';

export function setGoal(goals) {
    const action ={
        type: SET_GOALS,
        goals
    }
    return action;
}
import {SET_COMPLETED} from '../constants';

export function setCompleted(completed_goals) {
    const action = {
        type: SET_COMPLETED,
        completed_goals
    }
    return action;
}
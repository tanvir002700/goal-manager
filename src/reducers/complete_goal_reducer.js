import {SET_COMPLETED} from '../constants';

export default function (state = [], action) {
    switch (action.type){
        case SET_COMPLETED:
            console.log('Came to completed reducers', action);
            const {completed_goals} = action;
            return completed_goals;
        default:
            return state;
    }
}
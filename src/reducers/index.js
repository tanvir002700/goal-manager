import {combineReducers} from 'redux';
import user from './user_reducer';
import goals from './goal_reducer';

export default combineReducers({
    user,
    goals
});
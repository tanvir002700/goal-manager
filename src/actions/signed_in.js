import {SIGNED_IN} from '../constants';

export function logUser(email) {
    console.log('Hit action.....');
    const action = {
        type: SIGNED_IN,
        email: email
    };
    return action;
}
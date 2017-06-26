import {SIGNED_IN} from '../constants';

let user = {
    email: null
}

export default function (state=user, action) {
    console.log('Set here change state: ', action);
    switch (action.type){
        case SIGNED_IN:
            const {email} = action;
            user = {
                email
            }
            return user;
        default:
            return state;
    }
}
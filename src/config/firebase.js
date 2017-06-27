import * as firebase from 'firebase';
import config from './secrets';

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');
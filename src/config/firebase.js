import * as firebase from 'firebase';
import config from './secrets';

export const firebaseApp = firebase.initializeApp(config);
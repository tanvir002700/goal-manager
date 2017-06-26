import React, {Component} from 'react';
import firebase from '../config/firebase';

class App extends Component {
    render() {
        firebase();
        return(
            <div>Hello from app</div>
        );
    };
}

export default App;
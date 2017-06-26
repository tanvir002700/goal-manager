import React, {Component} from 'react';
import {firebaseApp} from '../config/firebase';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return(
            <div>
                <h2>Home page</h2>
                <button type="button" className="btn btn-danger"
                    onClick={() => this.signOut()}
                >Sign Out</button>
            </div>
        );
    };
}

export default App;
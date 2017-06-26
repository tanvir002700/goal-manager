import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../config/firebase';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    renderUserDetails() {
        console.log(this.props);
        const {user} = this.props;
        return(
            <div>email: {user.email}</div>
        );
    }

    render() {
        return(
            <div>
                <h2>Home page</h2>
                {this.renderUserDetails()}
                <button type="button" className="btn btn-danger"
                    onClick={() => this.signOut()}
                >Sign Out</button>
            </div>
        );
    };
}

function mapStateToProps(state) {
    console.log(state);
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(App);
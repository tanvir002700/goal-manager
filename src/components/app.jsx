import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../config/firebase';
import AddGoal from './add_goal';
import GoalList from './goal_list';
import CompleteGoalLists from './complete_goal_lists';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    signOut() {
        firebaseApp.auth().signOut();
    }

    renderUserDetails() {
        const {user} = this.props;
        return(
            <div>email: {user.email}</div>
        );
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return(
            <div>
                <AppBar
                    title="Goal Manager"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <AppBar
                        title='Goal Manager'
                        zDepth={0}
                        onLeftIconButtonTouchTap={this.handleToggle} />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem primaryText="Sign out" onTouchTap={() => this.signOut()}/>
                </Drawer>

                <h2>Goal</h2>
                {this.renderUserDetails()}
                <AddGoal/>
                <GoalList/>
                <CompleteGoalLists/>
            </div>
        );
    };
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(App);
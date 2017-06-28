import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../config/firebase';
import AddGoal from './add_goal';
import GoalList from './goal_list';
import CompleteGoalLists from './complete_goal_lists';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

injectTapEventPlugin();
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
                />
                <RaisedButton
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>
                        <RaisedButton label="Sign Out" secondary={true} onClick={() => this.signOut()} />
                    </MenuItem>
                </Drawer>

                {/*<h2>Goal</h2>*/}
                {/*{this.renderUserDetails()}*/}
                {/*<AddGoal/>*/}
                {/*<GoalList/>*/}
                {/*<CompleteGoalLists/>*/}

            </div>
        );
    };
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(App);
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {browserHistory} from 'react-router';
import {firebaseApp} from '../config/firebase';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    handleToggle = () => this.setState({open: !this.state.open});

    goto_page(page) {
        this.setState({open: false}, () => {
            browserHistory.push(page);
        })
    }

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
                    <MenuItem onClick={() => this.goto_page('/app/add_goal')}>Add Goal</MenuItem>
                    <MenuItem onClick={() => this.goto_page('/app/goal_list')}>Goal List</MenuItem>
                    <MenuItem onClick={() => this.goto_page('/app/complete_goal_lists')}>Complete Goal Lists</MenuItem>
                    <MenuItem primaryText="Sign out" onTouchTap={() => this.signOut()}/>
                </Drawer>
            </div>
        );
    }
}

export default Layout;
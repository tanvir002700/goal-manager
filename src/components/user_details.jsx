import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {

    renderUserDetails() {
        const {user} = this.props;
        return(
            <div>email: {user.email}</div>
        );
    }
    render() {
        return(
            <div>
                {this.renderUserDetails()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    };
}
export default connect(mapStateToProps,null)(UserDetails);
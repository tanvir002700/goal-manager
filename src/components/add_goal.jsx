import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../config/firebase';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal() {
        const {user} = this.props;
        goalRef.push({owner: user, goal: this.state.title});
    }

    render() {
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Goal"
                        onChange={event => this.setState({title: event.target.value})}
                    />
                    <button type="button" className="btn btn-primary"
                        onClick={() => this.addGoal()}
                    >Add goal</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(AddGoal);
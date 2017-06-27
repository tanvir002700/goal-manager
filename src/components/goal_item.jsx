import React, {Component} from 'react';

class GoalItem extends Component {
    render() {
        console.log('goal item props: ', this.props);
        return(
            <div>Goal Item</div>
        );
    }
}

export default GoalItem;
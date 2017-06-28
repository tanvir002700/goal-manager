import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Layout from './layout';
import '../assets/stylesheets/paper.css';


class App extends Component {

    render() {
        return(
            <div>
                <Layout/>
                <Paper className="canvas" zDepth={5}>
                {this.props.children}
                </Paper>
            </div>
        );
    };
}

export default App;
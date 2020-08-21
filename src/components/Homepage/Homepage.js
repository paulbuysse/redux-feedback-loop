import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {

    startForm = () => {
        this.props.history.push('/feelings')
    }

    render() {
        return (
            <div>
                <h1>Please give us feedback!</h1>
                <h3>Click the link below to begin.</h3>

                <button onClick={this.startForm}>Start</button>
            </div>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Homepage);
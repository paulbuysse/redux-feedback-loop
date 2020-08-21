import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submitted extends Component {

    returnToFeelings = () => {
        this.props.history.push('/feelings')
    }

    render() {
        return (
            <div>
                <h1>Thank you for the feedback!</h1>
                <h3>We will review it shortly.</h3>

                <button onClick={this.returnToFeelings}>Back to start</button>
            </div>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Submitted);
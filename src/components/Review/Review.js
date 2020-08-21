import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    render() {
        return (
            <div>

                <h1>Review Your Feedback</h1>

        <h2>Feelings: {this.props.reduxState.feelingsReducer}</h2>
        <h2>Understanding: {this.props.reduxState.understandingReducer}</h2>
        <h2>Support: {this.props.reduxState.supportReducer}</h2>
        <h2>Comments: {this.props.reduxState.commentsReducer}</h2>

        <button>Submit</button>

            </div>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Review);
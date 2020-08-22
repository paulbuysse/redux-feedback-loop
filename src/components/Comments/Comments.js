import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    //empty comments state get updated when input is changed
    state = {
        comments: ''
    }

    //sends updated comments state to comments reducer
    handleSubmit = () => {
        this.props.dispatch(
            { type: 'COMMENTS_SUBMIT', payload: this.state.comments }
        );

        this.props.history.push('/review')
    }

    //back to support
    handleBack = () => {
        this.props.history.push('/support')
    }

    //user inputs
    render() {
        return (
            <div>

                <h1>Do you have any comments you want to leave?</h1>

                <input placeholder="Comments" onChange={(event) => this.setState({ comments: event.target.value })} />

                <br />

                <button onClick={this.handleBack}>Back</button>
                <button onClick={this.handleSubmit}>Next</button>

            </div>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Comments);
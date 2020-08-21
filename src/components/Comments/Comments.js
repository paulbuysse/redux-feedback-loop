import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleSubmit = () => {
        this.props.dispatch(
            { type: 'COMMENTS_SUBMIT', payload: this.state.comments }
        );

        this.props.history.push('/review')
    }

    render() {
        return (
            <div>

            <h1>Do you have any comments you want to leave?</h1>

            <input placeholder="Comments" onChange={(event) => this.setState({ comments: event.target.value })} />

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
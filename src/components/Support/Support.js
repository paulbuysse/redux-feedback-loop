import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: ''
    }

    handleSubmit = () => {
        this.props.dispatch(
            { type: 'SUPPORT_SUBMIT', payload: this.state.support }
        );

        this.props.history.push('/comments')
    }

    render() {
        return (
            <div>

            <h1>How well are you being supported?</h1>

            <input placeholder="Answer" onChange={(event) => this.setState({ support: event.target.value })} />

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

export default connect(mapStoreToProps)(Support);
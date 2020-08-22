import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    //local support state
    state = {
        support: ''
    }

    //sends local state to support reducer
    handleSubmit = () => {
        if (this.state.support !== '') {
            this.props.dispatch(
                { type: 'SUPPORT_SUBMIT', payload: this.state.support }
            );

            this.props.history.push('/comments')
        } else {
            alert('Please fill out the form!')
        }
    }

    //back to understanding
    handleBack = () => {
        this.props.history.push('/understanding')
    }

    //user inputs
    render() {
        return (
            <div>

                <h1>How well are you being supported?</h1>

                <input placeholder="Answer" type="number" onChange={(event) => this.setState({ support: event.target.value })} />

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

export default connect(mapStoreToProps)(Support);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    //beginning state is empty
    state = {
        understanding: ''
    }

    //dispatches the changed state to understandingReducer
    handleSubmit = () => {
        if (this.state.understanding !== '') {
            this.props.dispatch(
                { type: 'UNDERSTANDING_SUBMIT', payload: this.state.understanding }
            );

            this.props.history.push('/support')
        } else {
            alert('Please fill out the form!')
        }
    }

    //back to feelings
    handleBack = () => {
        this.props.history.push('/feelings')
    }

    render() {
        //user inputs
        return (
            <div>

                <h1>How well are you understanding the content?</h1>

                <input placeholder="Answer" type="number" onChange={(event) => this.setState({ understanding: event.target.value })} />

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

export default connect(mapStoreToProps)(Understanding);
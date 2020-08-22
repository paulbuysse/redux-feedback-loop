import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {

    //local state starts as empty
    state = {
        feelings: ''
    }

    //dispatch data to feelingsReducer
    handleSubmit = () => {
        if (this.state.feelings !== '') {
            this.props.dispatch(
                { type: 'FEELINGS_SUBMIT', payload: this.state.feelings }
            );

            this.props.history.push('/understanding')
        } else {
            alert('Please fill out the form!')
        }
    }

    render() {
        //user inputs and submits
        return (
            <div>

                <h1>How are you feeling today?</h1>

                <input placeholder="Answer" type="number" onChange={(event) => this.setState({ feelings: event.target.value })} />

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

export default connect(mapStoreToProps)(Feelings);
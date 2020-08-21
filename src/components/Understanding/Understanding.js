import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: ''
    }

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

    render() {
        return (
            <div>

                <h1>How well are you understanding the content?</h1>

                <input placeholder="Answer" type="number" onChange={(event) => this.setState({ understanding: event.target.value })} />

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
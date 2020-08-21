import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {

    state = {
        feelings: ''
    }

    handleSubmit = () => {
        this.props.dispatch(
            { type: 'FEELINGS_SUBMIT', payload: this.state.feelings }
        );

        this.props.history.push('/understanding')
    }

    render() {
        console.log(this.state.feelings)
        return (
            <div>

                <h1>How are you feeling today?</h1>

                <input placeholder="Answer" onChange={(event) => this.setState({ feelings: event.target.value })} />
            
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
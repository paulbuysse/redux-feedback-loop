import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    //function that makes a POST request to server with all answers
    handleSubmit = () => {
        //object containing all answers with today's feedback
        const feedbackToday = {
            feeling: Number(this.props.reduxState.feelingsReducer),
            understanding: Number(this.props.reduxState.understandingReducer),
            support: Number(this.props.reduxState.supportReducer),
            comments: this.props.reduxState.commentsReducer
        }

        console.log(feedbackToday)

        //POST request to /sendFeedback with our answers object
        axios.post('/sendFeedback', feedbackToday)
            .then(response => {
                console.log(response);
                this.props.history.push('/submitted')
            })
            .catch(error => {
                console.log('error in review handleSubmit', error);
                alert('Error submitting feedback.')
            })

    }

    //answers displayed so user can review
    render() {
        return (
            <div>

                <h1>Review Your Feedback</h1>

                <h2>Feelings: {this.props.reduxState.feelingsReducer}</h2>
                <h2>Understanding: {this.props.reduxState.understandingReducer}</h2>
                <h2>Support: {this.props.reduxState.supportReducer}</h2>
                <h2>Comments: {this.props.reduxState.commentsReducer}</h2>

                <button onClick={this.handleSubmit}>Submit</button>

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
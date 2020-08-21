import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    render() {
        return (
            <p>review linked</p>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Review);
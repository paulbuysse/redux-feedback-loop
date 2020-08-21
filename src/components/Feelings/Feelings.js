import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {

    render() {
        return (
            <p>feelings linked</p>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Feelings);
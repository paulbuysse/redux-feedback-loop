import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submitted extends Component {

    render() {
        return (
            <p>submitted linked</p>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Submitted);
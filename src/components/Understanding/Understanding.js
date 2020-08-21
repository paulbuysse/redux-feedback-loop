import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    render() {
        return (
            <p>understanding linked</p>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Understanding);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    render() {
        return (
            <p>support linked</p>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Support);
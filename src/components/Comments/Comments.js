import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    render() {
        return (
            <p>comments linked</p>
        )
    }
}

const mapStoreToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStoreToProps)(Comments);
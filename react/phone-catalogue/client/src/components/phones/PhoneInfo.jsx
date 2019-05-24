import React, { Component } from 'react'
import { connect } from 'react-redux';

class PhoneInfo extends Component {
    render() {
        const phone = this.props.phone;
        if(!phone) return <h1>Loading</h1>
        return (
            <React.Fragment>
                <h2>{phone.name}</h2>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        phone : state.phones[ownProps.match.params.id]
    };
}

export default connect(
    mapStateToProps
)(PhoneInfo)
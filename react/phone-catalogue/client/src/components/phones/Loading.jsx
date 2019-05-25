import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="loading-page">
                    <div className="loader" />
                </div>
            </React.Fragment>
        )
    }
}

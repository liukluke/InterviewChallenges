import React, { Component } from 'react'

export default class PhoneElement extends Component {
    render() {
        return (
            <React.Fragment>
                <li>
                    <div>
                        <img src={this.props.imageFileName} alt="phone" />
                    </div>
                    <h2>{this.props.name}</h2>
                </li>
            </React.Fragment>
        )
    }
}


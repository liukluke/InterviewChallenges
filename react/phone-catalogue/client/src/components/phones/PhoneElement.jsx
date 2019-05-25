import React, { Component } from 'react';
import './Phone.scss';

export default class PhoneElement extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="phone-card">
                    <div className="card-img-box">
                        <img src={this.props.imageFileName} alt="phone" />
                    </div>
                    <h2>{this.props.name}</h2>
                </li>
            </React.Fragment>
        )
    }
}


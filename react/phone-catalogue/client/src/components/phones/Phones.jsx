import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PhoneElement from './PhoneElement';

class Phones extends Component {

    render() {
        const phones = this.props.phones;
        if (phones.length === 0) return <h1>Loading</h1>
        return (
            <React.Fragment>
                {
                    <ul>
                        {
                            phones.map(phone => {
                                return <Link key={phone.id} to={`/${phone.id}`}><PhoneElement {...phone} /></Link>
                            })
                        }
                    </ul>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        phones: state.phones
    };
}

export default connect(
    mapStateToProps
)(Phones)


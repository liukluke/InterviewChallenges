import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../Finder';
import PhoneService from '../../service/phone-service';
import PhoneElement from './PhoneElement';

class Phones extends Component {

    constructor(props) {
        super(props);

        store.subscribe(() => {
            this.setState(store.getState())
        })
    }


    componentDidMount() {
        this.props.findAll();
    }


    render() {
        return (
            <React.Fragment>
                {
                    <ul>
                        {
                            this.props.state.phones.map(phone => {
                                return <Link key={phone.id} to={`/${phone.id}`}><PhoneElement phone={phone} /></Link>
                            })
                        }
                    </ul>
                }
            </React.Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        findAll: () => {
            PhoneService.findAll()
                .then(phones => {
                    dispatch({ type: 'FIND_ALL', payload: phones })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Phones)


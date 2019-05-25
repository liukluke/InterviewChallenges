import './App.css';
import Phones from './components/phones/Phones';
import { Switch, Route } from 'react-router-dom';
import PhoneInfo from './components/phones/PhoneInfo';
import PhoneService from './service/phone-service';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    this.props.findAll();
  }


  render() {
    return (
      <React.Fragment>
        <Switch>
            <Route exact path='/' component={Phones} />
            <Route exact path='/:id' component={PhoneInfo} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones
  };
}

const mapDispatchToProps = dispatch => {
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
)(App)


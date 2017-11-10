import React from 'react';
import PropTypes from 'prop-types'
import Header from './common/header';
import {connect} from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} authenticated={this.props.authenticated}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    authenticated: state.authenticationData.authenticated
  };
}

export default connect(mapStateToProps)(App);

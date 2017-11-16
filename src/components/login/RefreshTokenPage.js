import React from 'react';
import PropTypes from 'prop-types'
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { ProgressBar } from 'react-bootstrap';

class RefreshTokenPage extends React.Component {
    componentDidMount() {
        //this.props.actions.refreshAuth();
    }

    componentDidUpdate() {
        // if (this.props.authenticated === 1)
        //     browserHistory.goBack();
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-3"></div>
                <div className="col-xs-6">
                    <h3 className="refreshToken">Please wait, the token is being refreshed...</h3>
                    <ProgressBar active now={100} />
                </div>
                <div className="col-xs-3"></div>
            </div>
        );
    }
}

RefreshTokenPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.authenticationData.authenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTokenPage);

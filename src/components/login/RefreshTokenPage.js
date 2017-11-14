import React from 'react';
import PropTypes from 'prop-types'
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class RefreshTokenPage extends React.Component {
    componentDidMount() {
        this.props.actions.refreshAuth();
    }

    componentDidUpdate(){
        if (this.props.authenticated === 1)
            browserHistory.goBack();
    }

    render() {
        return (
            <div>
                <BlockUi tag="div" blocking={!this.props.authenticated === 1}>
                    <h1 className="refreshToken">Please wait, the token is being refreshed...</h1>
                </BlockUi>
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

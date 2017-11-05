import React, { PropTypes } from 'react';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class LogoffPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.logoffAuth();
        setTimeout(() => { browserHistory.push('/home'); }, 2000);
    }

    render() {
        return (
            <div>
                <h1>Test admin Logoff</h1>
                <p>Goodbye</p>
            </div>
        );
    }
}

LogoffPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoffPage);

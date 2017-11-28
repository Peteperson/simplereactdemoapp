import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import * as dictActions from '../../actions/dictActions';
import ConfigList from './ConfigList';
import { browserHistory } from 'react-router';

class ConfigsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.requestInfo({ type: 'get', api: '/api/Views/Configuration' });
    }

    render() {
        const { configs } = this.props;
        return (
            <div>
                <h1>Configuration</h1>
                {<ConfigList configs={configs} />}
            </div>
        );
    }
}

ConfigsPage.propTypes = {
    configs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        configs: state.authorizedData.listOfObjects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restServiceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigsPage);

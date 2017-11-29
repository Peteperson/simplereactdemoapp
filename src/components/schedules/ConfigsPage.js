import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import ConfigList from './ConfigList';

class ConfigsPage extends React.Component {
    componentWillMount() {
        this.props.actions.callRequest({ type: 'get', api: '/api/Views/Configuration' });
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

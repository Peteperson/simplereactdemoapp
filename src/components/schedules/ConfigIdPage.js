import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import AutoForm from '../common/AutoForm';

class ConfigIdPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            config: Object.assign({}, this.props.config),
            errors: {},
            schema: {
                properties: [
                    { name: 'name', 'large': false, type: "string", title: "Name" },
                    { name: 'stringvalue', 'large': false, type: "string", title: "String value" },
                    { name: 'datevalue', 'large': false, type: "date", title: "date value", default: "" },
                    { name: 'numvalue', 'large': false, type: "number", title: "Num value" },
                    { name: 'isCritical', 'large': false, type: "bool", title: "Is critical", default: "" }
                ]
            },
            saving: false
        };
        this.updateState = this.updateState.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        debugger
        if (this.props.config.name !== nextProps.config.name) {
            this.setState({
                config: Object.assign({}, nextProps.config),
                errors: {},
                saving: false
            });
        }
    }

    onSave(event) {
        event.preventDefault();
        this.setState({ saving: true });
    }

    updateState(event) {
        const field = event.target.name;
        let config = Object.assign({}, this.state.config);
        config[field] = event.target.value;
        return this.setState({ config: config });
    }

    render() {
        const { config, schema } = this.state;
        return (
            <AutoForm title='config details' mainObject={config} schemaProps={schema.properties} onChange={this.updateState}
                onSave={this.onSave} saving={this.state.saving} errors={this.state.errors} />
        );
    }
}

ConfigIdPage.propTypes = {
    configId: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        configId: ownProps.params.id,
        config: state.authorizedData.listOfObjects.filter(item => item.name === ownProps.params.id)[0]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restServiceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigIdPage);

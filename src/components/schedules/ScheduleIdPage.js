import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import AutoForm from '../common/AutoForm';

const schema = {
    properties: [
        { name: 'branchId', type: "integer", title: "Branch id" },
        { name: 'id', type: "integer", title: "id" },
        { name: 'dateStamp', type: "string", format: "date", title: "dateStamp" },
        { name: 'noOfEmployees', type: "integer", title: "No of emp" },
        { name: 'source', type: "integer", title: "Source" },
        { name: 'area', type: "string", title: "Area", default: "" },
        { name: 'auditorId', type: "string", title: "Auditor id", default: "" },
        { name: 'auditorName', type: "string", title: "Auditor name", default: "" },
        { name: 'branchDescription', type: "string", title: "Branch", default: "" },
        { name: 'hRissues', type: "string", title: "HR issues", default: "" },
        { name: 'managerName', type: "string", title: "Manager", default: "" },
        { name: 'opportunitiesComments', type: "string", title: "Opportunities", default: "" },
        { name: 'otherComments', type: "string", title: "Comments", default: "" },
        { name: 'rankingComments', type: "string", title: "Ranking", default: "" },
        { name: 'sectorInfo', type: "string", title: "Sector info", default: "" },
        { name: 'strongPointsComments', type: "string", title: "Strong points", default: "" },
        { name: 'threatsComments', type: "string", title: "Threats", default: "" },
        { name: 'weakPointsComments', type: "string", title: "Weak points", default: "" }
    ]
};

class ScheduleIdPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            schedule: Object.assign({}, this.props.schedule),
            errors: {},
            saving: false
        };
        this.updateState = this.updateState.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
        this.props.actions.requestInfo({ type: 'get', api: '/api/Schedules/' + this.props.scheduleId });
    }

    onSave(event) {
        event.preventDefault();
        this.setState({ saving: true });
    }

    updateState(event) {
        const field = event.target.name;
        let schedule = Object.assign({}, this.props.schedule);
        schedule[field] = event.target.value;
        return this.setState({ schedule: schedule });
    }

    render() {
        const { schedule } = this.props;
        return (
            <AutoForm title='schedule details' mainObject={schedule} schemaProps={schema.properties} onChange={this.updateState}
                onSave={this.onSave} saving={this.state.saving} errors={this.state.errors}/>
        );
    }
}

ScheduleIdPage.propTypes = {
    scheduleId: PropTypes.string.isRequired,
    schedule: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        scheduleId: ownProps.params.id,
        schedule: state.authorizedData.singleObject
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restServiceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIdPage);

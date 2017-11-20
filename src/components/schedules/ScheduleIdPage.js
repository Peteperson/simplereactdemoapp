import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';

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
        this.state = { controls: [] }
        this.updateState = this.updateState.bind(this);
    }

    componentWillMount() {
        this.props.actions.requestInfo({ type: 'get', api: '/api/Schedules/' + this.props.scheduleId });
    }

    updateState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    render() {
        const { schedule } = this.props;
        let ctrls = [];
        if (schedule.id) {
            schema.properties.forEach(function (prop) {
                if (schedule.hasOwnProperty(prop.name)) {
                    ctrls.push(prop);
                } else {
                    console.log("Problem with property: " + prop.name);
                }
            });
        }
        return (
            <div>
                <h1>ScheduleId: {schedule.id}</h1>
                {ctrls.map((item, i) =>
                    <TextInput key={i} name={item.name} label={item.title} value={schedule[item.name]} onChange={this.updateState} error={''} />
                )}
            </div>
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

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import Form from "react-jsonschema-form";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        branchId: { type: "integer", title: "Branch id" },
        id: { type: "integer", title: "id" },
        dateStamp: { type: "string", format: "date", title: "dateStamp" },
        noOfEmployees: { type: "integer", title: "No of emp" },
        source: { type: "integer", title: "Source" },
        area: { type: "string", title: "Area", default: "" },
        auditorId: { type: "string", title: "Auditor id", default: "" },
        auditorName: { type: "string", title: "Auditor name", default: "" },
        branchDescription: { type: "string", title: "Branch", default: "" },
        hRissues: { type: "string", title: "HR issues", default: "" },
        managerName: { type: "string", title: "Manager", default: "" },
        opportunitiesComments: { type: "string", title: "Opportunities", default: "" },
        otherComments: { type: "string", title: "Comments", default: "" },
        rankingComments: { type: "string", title: "Ranking", default: "" },
        sectorInfo: { type: "string", title: "Sector info", default: "" },
        strongPointsComments: { type: "string", title: "Strong points", default: "" },
        threatsComments: { type: "string", title: "Threats", default: "" },
        weakPointsComments: { type: "string", title: "Weak points", default: "" }
    }
};

const log = (type) => console.log.bind(console, type);

class ScheduleIdPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.requestInfo({ type: 'get', api: '/api/Schedules/' + this.props.scheduleId });
    }

    render() {
        const { schedule } = this.props;
        return (
            <div>
                <h1>ScheduleId: {this.props.scheduleId}</h1>
                <Form schema={schema}
                    formData={this.props.schedule}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")} />
                {/* {<ScheduleForm schedule={schedule} />} */}
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

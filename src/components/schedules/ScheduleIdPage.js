import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import AutoForm from '../common/AutoForm';

class ScheduleIdPage extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         schedule: Object.assign({}, this.props.schedule),
         errors: {},
         schema: { properties: [] },
         saving: true
      };
      this.updateState = this.updateState.bind(this);
      this.onSave = this.onSave.bind(this);
   }

   componentWillMount() {
      this.props.actions.callRequest({ type: 'get', api: '/api/Schedules/' + this.props.scheduleId });
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.schedule.id && nextProps.statuses) {
         this.setState({
            schedule: Object.assign({}, nextProps.schedule),
            errors: {},
            schema: {
               properties: [
                  { name: 'dateTime', 'large': false, type: "date", title: "dateTime" },
                  { name: 'branchId', 'large': false, type: "number", title: "Branch id" },
                  { name: 'branchDescription', 'large': false, type: "string", title: "Branch", default: "" },
                  { name: 'noOfEmployees', 'large': false, type: "number", title: "No of emp" },
                  { name: 'area', 'large': false, type: "string", title: "Area", default: "" },
                  { name: 'sectorInfo', 'large': false, type: "string", title: "Sector info", default: "" },
                  { name: 'auditorId', 'large': false, type: "string", title: "Auditor id", default: "" },
                  { name: 'auditorName', 'large': false, type: "string", title: "Auditor name", default: "" },
                  { name: 'managerName', 'large': false, type: "string", title: "Manager", default: "" },
                  { name: 'source', 'large': false, type: "bool", title: "Source" },
                  { name: 'opportunitiesComments', 'large': true, type: "string", title: "Opportunities", default: "" },
                  { name: 'rankingComments', 'large': true, type: "string", title: "Ranking", default: "" },
                  { name: 'strongPointsComments', 'large': true, type: "string", title: "Strong points", default: "" },
                  { name: 'threatsComments', 'large': true, type: "string", title: "Threats", default: "" },
                  { name: 'weakPointsComments', 'large': true, type: "string", title: "Weak points", default: "" },
                  { name: 'hRissues', 'large': true, type: "string", title: "HR issues", default: "" },
                  { name: 'otherComments', 'large': true, type: "string", title: "Comments", default: "" },
                  { name: 'status', 'large': false, type: "list", options: nextProps.statuses, title: "Status" }
               ]
            },
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
      let schedule = Object.assign({}, this.state.schedule);
      schedule[field] = event.target.value;
      return this.setState({ schedule: schedule });
   }

   render() {
      const { schedule, schema } = this.state;
      return (
         <AutoForm title='schedule details' mainObject={schedule} schemaProps={schema.properties} onChange={this.updateState}
            onSave={this.onSave} saving={this.state.saving} errors={this.state.errors} />
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
      schedule: state.authorizedData.singleObject,
      statuses: state.dictionaries.statuses ? state.dictionaries.statuses.map(q => { return { value: q.id, label: q.description }; }) : null
   };
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(restServiceActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIdPage);

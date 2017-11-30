import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import * as dictActions from '../../actions/dictActions';
import ScheduleList from './ScheduleList';
import { browserHistory } from 'react-router';

class SchedulesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddSchedulePage = this.redirectToAddSchedulePage.bind(this);
    }

    componentWillMount() {
        this.props.actions.callRequest({ type: 'get', api: '/api/Schedules/AllSchedulesCut' });
        //this.props.actions.loadDictionaries({ name: 'statuses', type: 'get', api: '/api/Views/ScheduleStatus' });
    }

    redirectToAddSchedulePage() {
        browserHistory.push('/schedule');
    }

    render() {
        const { schedules } = this.props;
        return (
            <div>
                <h1>Schedules</h1>
                {<ScheduleList schedules={schedules} />}
            </div>
        );
    }
}

SchedulesPage.propTypes = {
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        schedules: state.authorizedData.listOfObjects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...restServiceActions, ...dictActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesPage);

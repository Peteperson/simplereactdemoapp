import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
// import ScheduleList from './ScheduleList';
import { browserHistory } from 'react-router';

class SchedulesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddSchedulePage = this.redirectToAddSchedulePage.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadSchedules();
    }

    redirectToAddSchedulePage() {
        browserHistory.push('/schedule');
    }

    render() {
        const { schedules } = this.props;
        if(schedules)
            console.log(schedules);
        return (
            <div>
                <h1>Schedules</h1>
                {/* <input type="submit"
                        value="Add schedule"
                        className="btn btn-primary"
                        onClick={this.redirectToAddSchedulePage} /> */}
                {/* {<ScheduleList schedules={schedules} />} */}
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
        schedules: state.schedules
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesPage);

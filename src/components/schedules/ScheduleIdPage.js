import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';

class ScheduleIdPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.requestInfo({ type: 'get', api: '/api/Schedules/' + this.props.scheduleId });
    }

    render() {
        const { schedule } = this.props;
        console.log(this.props.schedule);
        return (
            <div>
                <h1>ScheduleId: {this.props.scheduleId}</h1>
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
        schedule: state.authorizedData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restServiceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleIdPage);

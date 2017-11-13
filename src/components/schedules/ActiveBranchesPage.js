import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restServiceActions from '../../actions/restServiceActions';
import ActiveBranchesList from './ActiveBranchesList';

class ActiveBranchesPage extends React.Component {
    componentWillMount() {
        this.props.actions.requestInfo({type: 'get', api: '/api/Views/ActiveBranches'});
    }

    render() {
        const { actBranches } = this.props;
        return (
            <div>
                <h1>ActiveBranches</h1>
                {/* <input type="submit"
                        value="Add schedule"
                        className="btn btn-primary"
                        onClick={this.redirectToAddActiveBranchesPage} /> */}
                {<ActiveBranchesList actBranches={actBranches} />}
            </div>
        );
    }
}

ActiveBranchesPage.propTypes = {
    actBranches: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        actBranches: state.authorizedData.listOfObjects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restServiceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBranchesPage);

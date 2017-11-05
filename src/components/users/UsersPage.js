import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import {browserHistory} from 'react-router';

class UsersPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }

  componentDidMount(){
    this.props.actions.loadUsers();
  }

  redirectToAddUserPage(){
    browserHistory.push('/user');
  }

  userRow(user, index){
    return (
      <div key={index}>{user.title}</div>
      );
  }

  render() {
    const {users} = this.props;

    return (
      <div>
      {users.length > 0 ? <div>
        <h1>Users</h1>
        <input type="submit"
              value="Add user"
              className="btn btn-primary"
              onClick={this.redirectToAddUserPage}/>
        {<UserList users={users} />}
      </div> :
          <div>
              Please wait...
          </div>
      }
      </div>

    );
  }
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  //state.users equals users in line 2 of ...reducers/index.js
 
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);

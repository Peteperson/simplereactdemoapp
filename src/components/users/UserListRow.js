import React, {PropTypes} from 'react';

const UserListRow = ({user}) => {
  return (
    <tr>
      {/* <td><a href="{user.watchHref}" target="_blank" />Watch</td>
      <td><Link to={'/user/' + user.id}>{user.title}</Link></td> */}
      <td></td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.company.name}</td>
      </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;

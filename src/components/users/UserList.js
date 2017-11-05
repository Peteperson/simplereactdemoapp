import React, { PropTypes } from 'react';
import UserListRow from './UserListRow';

const UserList = ({ users }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>email</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <UserListRow key={user.id} user={user} />)}
            </tbody>
        </table>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;

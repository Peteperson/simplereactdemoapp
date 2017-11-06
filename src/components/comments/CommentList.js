import React from 'react';
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const selectRowProp = {
    mode: 'checkbox',
    bgColor: 'grey',
    hideSelectColumn: true,
    clickToSelect: true
}; 

const cellEditProp = { mode: 'click' }; 

const CommentList = ({ comments }) => {
    return (
        <BootstrapTable data={comments} pagination search exportCSV deleteRow insertRow
            selectRow={selectRowProp} cellEdit={cellEditProp}>
            <TableHeaderColumn isKey dataField="id" hidden>Comment ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" width="150" dataSort={"true"}
                tdStyle={{ whiteSpace: 'normal' }}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="body" dataSort={"true"} 
                tdStyle={{ whiteSpace: 'normal' }}>Message</TableHeaderColumn>
        </BootstrapTable>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;

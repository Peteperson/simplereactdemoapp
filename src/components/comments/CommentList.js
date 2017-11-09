import React from 'react';
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader';

const selectRowProp = {
    mode: 'checkbox',
    bgColor: '#444444',
    hideSelectColumn: false,
    clickToSelect: true
}; 

const options = {
    clearSearch: true 
}; 

const cellEditProp = { mode: 'dbclick' }; 

const CommentList = ({ comments }) => {
    return (
        <OverlayLoader
            color={'red'}
            loader="ScaleLoader"
            text="Loading... Please wait!"
            active={!(comments && comments.length > 0)}
            backgroundColor={'gray'}
            opacity=".8">
            <BootstrapTable data={comments} pagination search exportCSV deleteRow insertRow
                selectRow={selectRowProp} cellEdit={cellEditProp} options={options}>
                <TableHeaderColumn isKey dataField="id" hidden>Comment ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" width="250" dataSort={true}
                    tdStyle={{ whiteSpace: 'normal' }}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="body" dataSort={true} 
                    tdStyle={{ whiteSpace: 'normal' }}>Message</TableHeaderColumn>
            </BootstrapTable>
        </OverlayLoader>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;

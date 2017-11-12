import React from 'react';
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {
    selectRowProp, 
    searchOptions, 
    defaultDateFormatter, 
    cellEditProp
} from '../../styles/tableDefaultStyle'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

const ActiveBranchesList = ({ actBranches }) => {
    return (
        <div>
            <BlockUi tag="div" blocking={!(actBranches && actBranches.length > 0)}>
                <BootstrapTable data={actBranches} pagination search exportCSV deleteRow insertRow
                    selectRow={selectRowProp} cellEdit={cellEditProp} options={searchOptions}>
                    <TableHeaderColumn dataField="brn_Code" isKey={true} width="100" dataSort={true}> id </TableHeaderColumn>
                    <TableHeaderColumn dataField="brn_Description" dataSort={true}>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="are_ShortCode" width="100" dataSort={true}>Area Short Code</TableHeaderColumn>
                    <TableHeaderColumn dataField="sec_ShortCode" width="100" dataSort={true}>Sector Short Code</TableHeaderColumn>
                </BootstrapTable>
            </BlockUi>
        </div>
    );
};

ActiveBranchesList.propTypes = {
    actBranches: PropTypes.array.isRequired
};

export default ActiveBranchesList;

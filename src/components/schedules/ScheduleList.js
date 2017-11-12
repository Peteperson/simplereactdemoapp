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

function nestedFormatter(cell, row) {
    return cell.description;
}

const ScheduleList = ({ schedules }) => {
    return (
        <div>
            <BlockUi tag="div" blocking={!(schedules && schedules.length > 0)}>
                <BootstrapTable data={schedules} pagination search exportCSV deleteRow insertRow
                    selectRow={selectRowProp} cellEdit={cellEditProp} options={searchOptions}>
                    <TableHeaderColumn dataField="id" isKey={true} hidden dataSort={true}> id </TableHeaderColumn>
                    <TableHeaderColumn dataField="dateTime" width="100" dataFormat={defaultDateFormatter} dataSort={true}>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="branchId" width="100" dataSort={true}>Brc</TableHeaderColumn>
                    <TableHeaderColumn dataField="branchDescription" dataSort={true}>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="area" width="100" dataSort={true}>Area</TableHeaderColumn>
                    <TableHeaderColumn dataField="managerName" dataSort={true}>Manager</TableHeaderColumn>
                    <TableHeaderColumn dataField="auditorName" dataSort={true}>Auditor</TableHeaderColumn>
                    <TableHeaderColumn dataField="source" width="100" dataSort={true}>Source</TableHeaderColumn>
                    <TableHeaderColumn dataField="scheduleStatus" width="100" dataFormat={nestedFormatter} dataSort={true}>Status</TableHeaderColumn>
                </BootstrapTable>
            </BlockUi>
        </div>
    );
};

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired
};

export default ScheduleList;

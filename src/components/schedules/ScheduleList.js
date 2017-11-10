import React from 'react';
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

const selectRowProp = {
    mode: 'checkbox',
    bgColor: '#444444',
    hideSelectColumn: false,
    clickToSelect: true
};

const options = {
    clearSearch: true
};

function dateFormatter(cell, row) {
    return cell.substring(0, 10);
} 

function nestedFormatter(cell, row) {
    return cell.description;
} 

const cellEditProp = { mode: 'dbclick' };

const ScheduleList = ({ schedules }) => {
    return (
        <div>
            <BlockUi tag="div" blocking={!(schedules && schedules.length > 0)}>
                <BootstrapTable data={schedules} pagination search exportCSV deleteRow insertRow
                    selectRow={selectRowProp} cellEdit={cellEditProp} options={options}>
                    <TableHeaderColumn dataField="id" isKey={true} hidden dataSort={true}> id </TableHeaderColumn>
                    <TableHeaderColumn dataField="dateTime" width="100" dataFormat={dateFormatter} dataSort={true}>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="branchId" width="100" dataSort={true}>Brc</TableHeaderColumn>
                    <TableHeaderColumn dataField="branchDescription" dataSort={true}>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="area" width="100" dataSort={true}>Area</TableHeaderColumn>
                    <TableHeaderColumn dataField="managerName" dataSort={true}>ManagerName</TableHeaderColumn>
                    <TableHeaderColumn dataField="auditorName" dataSort={true}>AuditorName</TableHeaderColumn>
                    <TableHeaderColumn dataField="source" width="100" dataSort={true}>Source</TableHeaderColumn>
                    <TableHeaderColumn dataField="scheduleStatus" dataFormat={nestedFormatter} dataSort={true}>ScheduleStatus</TableHeaderColumn>
                </BootstrapTable>
            </BlockUi>
        </div>
    );
};

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired
};

export default ScheduleList;

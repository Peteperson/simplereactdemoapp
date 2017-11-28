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
import { Link } from 'react-router';

function nestedFormatter(cell, row) {
    if (cell)
        return cell.description;
    return '';
}

function linkFormatter(cell, row) {
    return <Link to={'/config/' + row.id}>{cell}</Link>;
}

const ScheduleList = ({ configs }) => {
    return (
        <div>
            <BlockUi tag="div" blocking={!(configs && configs.length > 0)}>
                <BootstrapTable data={configs} pagination search exportCSV deleteRow insertRow
                    selectRow={selectRowProp} cellEdit={cellEditProp} options={searchOptions}>
                    <TableHeaderColumn dataField="name" isKey={true} dataFormat={linkFormatter} dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="stringvalue" dataSort={true}>String value</TableHeaderColumn>
                    <TableHeaderColumn dataField="datevalue" dataFormat={defaultDateFormatter} dataSort={true}>Date value</TableHeaderColumn>
                    <TableHeaderColumn dataField="numvalue" dataSort={true}>Numeric value</TableHeaderColumn>
                    <TableHeaderColumn dataField="isCritical" dataSort={true}>Is critical ?</TableHeaderColumn>
                </BootstrapTable>
            </BlockUi>
        </div>
    );
};

ScheduleList.propTypes = {
    configs: PropTypes.array.isRequired
};

export default ScheduleList;

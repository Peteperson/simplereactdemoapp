export const selectRowProp = {
    mode: 'checkbox',
    bgColor: '#444444',
    hideSelectColumn: false,
    clickToSelect: true
};

export const searchOptions = { clearSearch: true };

export function defaultDateFormatter(cell, row) {
    return cell.substring(0, 10);
} 

export const cellEditProp = { mode: 'dbclick' };

export const selectRowProp = {
    mode: 'checkbox',
    bgColor: '#444444',
    hideSelectColumn: false,
    clickToSelect: true
};

export const searchOptions = { clearSearch: true };

export function defaultDateFormatter(cell, row) {
    if(cell)
        return cell.substring(0, 10);
    return '';
} 

export const cellEditProp = { mode: 'dbclick' };

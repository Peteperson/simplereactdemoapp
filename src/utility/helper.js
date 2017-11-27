export function returnSmthIfNull(checkedValue, returnedValue) {
    if (checkedValue || checkedValue === 0)
        return checkedValue;
    return returnedValue;
} 

export function convertToBool(value) {
    if (value === true || value === 1 || value === "1")
        return true;
    return false;
}
export function returnSmthIfNull(checkedValue, returnedValue) {
    if (checkedValue || checkedValue===0)
        return checkedValue;
    return returnedValue;
}
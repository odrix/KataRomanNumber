exports.converter = function converter(decimalNumber) {

    let result = '';
    if (decimalNumber >= 5 - 1) {
        result = 'V';
        decimalNumber -= 5;
    }

    if (decimalNumber === -1)
        return 'I' + result;

    result += 'I'.repeat(decimalNumber);

    return result;
}
exports.converter = function converter(decimalNumber) {

    if (decimalNumber === 5)
        return 'V';

    if (decimalNumber === 4)
        return 'IV';

    return 'I'.repeat(decimalNumber);
}
const numbers = [
    { decimal: 10, roman: 'X' },
    { decimal: 5, roman: 'V' }
]

exports.converter = function converter(decimalNumber) {

    let result = '';

    while (decimalNumber > 3) {
        numbers.forEach(element => {
            if (decimalNumber >= element.decimal - 1) {
                result += element.roman;
                decimalNumber -= element.decimal;
            }
        });
    }

    if (decimalNumber === -1)
        if (result.length > 1)
            return result.substring(0, result.length - 1) + 'I' + result.substring(result.length - 1);
        else
            return 'I' + result;

    result += 'I'.repeat(decimalNumber);

    return result;
}
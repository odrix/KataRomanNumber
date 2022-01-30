const numbers = [
    { decimal: 50, roman: 'L' },
    { decimal: 10, roman: 'X' },
    { decimal: 5, roman: 'V' },
    { decimal: 1, roman: 'I' }
]

exports.converter = function converter(decimalNumber) {

    let result = '';

    let digit = 10
    let remain = decimalNumber % digit;
    let current = decimalNumber - remain;

    if (current === 0) {
        current = remain;
        remain = 0;
        digit = 1;
    }

    while (current > 0) {
        let element = numbers.filter(x => current >= x.decimal - digit);
        if (element.length > 0) {
            result += element[0].roman;
            current -= element[0].decimal;
        }

        if (current <= 0) {
            let e = numbers.filter(x => x.decimal * -1 == current);
            if (e.length > 0) {
                if (result.length > 1)
                    result = result.substring(0, result.length - 1) + e[0].roman + result.substring(result.length - 1);
                else
                    result = e[0].roman + result;
            }

            current = remain;
            remain = 0
            digit = 1;
        }
    }

    return result;
}
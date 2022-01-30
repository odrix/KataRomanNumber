const numbers = [
    { decimal: 100, roman: 'C' },
    { decimal: 50, roman: 'L' },
    { decimal: 10, roman: 'X' },
    { decimal: 5, roman: 'V' },
    { decimal: 1, roman: 'I' }
]

exports.converter = function converter(decimalNumber) {

    let result = '';

    let digit = 10 ^ (decimalNumber.length - 1);
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
            if (e.length > 0)
                result = addBeforeLastChar(result, e[0].roman);

            current = remain;
            digit = digit / 10;
            remain = remain % digit;
            current = current - remain;
        }
    }

    return result;
}

function addBeforeLastChar(s, beforeLastChar) {
    if (s.length > 1)
        return s.substring(0, s.length - 1) + beforeLastChar + s.substring(s.length - 1);
    else
        return beforeLastChar + s;
}
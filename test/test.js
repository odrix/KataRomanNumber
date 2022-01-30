var assert = require('assert');
const romanConverter = require('../romanNumberConverter')

describe('Roman number converter', function() {

    it('1 should return I', function() {
        let result = romanConverter.converter(1);
        assert.equal(result, 'I');
    });
});
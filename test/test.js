var assert = require('assert');
const romanConverter = require('../romanNumberConverter')

describe('Roman number converter', function() {

    it('1 should return I', function() {
        let result = romanConverter.converter(1);
        assert.equal(result, 'I');
    });

    it('2 should return II', function() {
        let result = romanConverter.converter(2);
        assert.equal(result, 'II');
    });

    it('5 should return V', function() {
        let result = romanConverter.converter(5);
        assert.equal(result, 'V');
    });

    it('4 should return IV', function() {
        let result = romanConverter.converter(4);
        assert.equal(result, 'IV');
    });

    it('6 should return VI', function() {
        let result = romanConverter.converter(6);
        assert.equal(result, 'VI');
    });


    it('10 should return X', function() {
        let result = romanConverter.converter(10);
        assert.equal(result, 'X');
    });

    it('9 should return IX', function() {
        let result = romanConverter.converter(9);
        assert.equal(result, 'IX');
    });

    it('14 should return XIV', function() {
        let result = romanConverter.converter(14);
        assert.equal(result, 'XIV');
    });

    it('40 should return XL', function() {
        let result = romanConverter.converter(40);
        assert.equal(result, 'XL');
    });

    it('49 should return XLIX', function() {
        let result = romanConverter.converter(49);
        assert.equal(result, 'XLIX');
    });




});
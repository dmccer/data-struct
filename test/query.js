var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var Query = require('../query/index');

describe('Query', function () {
    var tText = 'liaoyunhuakldadfasdfabcdefdafabajdskafldfdisfcdefgjoijfsdlkcdefjaldafabcdefghkdsfajdbcdekslfajdklsjfkadsjkfoidefghwquroqweirnjkdsafjldafjsdpfioewurewruewrkdsjafjsdlfjlds';
    
    var tester = function (tQuery, expR) {
        var r = Query(tQuery, tText);

        assert.deepEqual(expR, r);
    }

    it('should return size 0, and ``', function () {
        tester('', {
            qs: '',
            len: 0
        });
    });

    it('should return size 5, and bcdef', function () {
        tester('abcdefgh', {
            qs: 'abcdefgh',
            len: 8 
        });
    });

    it('should return size 3, and abc', function () {
        tester('abc', {
            qs: 'abc',
            len: 3 
        });
    });
});



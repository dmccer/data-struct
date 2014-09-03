var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var Stack = require('../stack/index');
var hanoi = require('../stack/hanoi');

describe('Hanoi', function () {
    var a, b, c;

    beforeEach(function () {
        a = new Stack();
        b = new Stack();
        c = new Stack();
    });

    afterEach(function () {
        hanoi.times = 0;
    });

    var initStackEl = function (stack, n) {
        var i = 0;

        while(i < n) {
            stack.push(i);
            i++;
        }
    }

    var testSize = function (n) {
        initStackEl(a, n);
        hanoi(n, a, b, c);
        
        assert.equal(n, c.size);
        assert.equal(0, a.size);
        assert.equal(0, b.size);
    }

    it('should return 3 of c when n = 3 of a', function () {
        testSize(3);
    });

    it('should return 4 of c when n = 4 of a', function () {
        testSize(4);
    });

    it('should return n of c when a.size = n', function () {
        testSize(10);
    });

    it('should calc 2^10 - 1 times , when a.size = 10', function () {
        var n = 10;

        initStackEl(a, n); 
        hanoi(n, a, b, c);

        assert.equal(Math.pow(2, 10) - 1, hanoi.times);
    });
});

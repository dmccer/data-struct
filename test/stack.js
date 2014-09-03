var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var Stack = require('../stack/index');

describe('Stack', function () {
    var stack;

    beforeEach(function () {
        stack = new Stack();
    });

    describe('.size', function () {
        it('should return 0 when init', function () {
            assert.equal(0, stack.size, 'init stack size == 0');
        });
    });

    describe('.push()', function () {
        it('should push the data into the stack', function () {
            var data = {
                a: 1,
                b: 2
            };

            assert.equal(0, stack.size);

            stack.push(data);
            assert.equal(1, stack.size);
            assert.deepEqual(data, stack._top.data, 'the stack pushed the data ok');
        });
    });

    describe('.top()', function () {
        it('should return null when stack is empty', function () {
            assert.isNull(stack.top(), 'null, empty stack');
        });

        it('should return top data of the stack', function () {
            var data = {
                a: 1,
                b: 2
            };

            stack.push(1);
            stack.push(2);

            stack.push(data);

            assert.deepEqual(data, stack.top(), 'deep equal the top data');
        });
    });

    describe('.pop()', function () {
        it('should return false when stack is empty', function () {
            assert.isFalse(stack.pop(), 'false, empty stack');
        });

        it('should pop the top of the stack', function () {
            var dA = 1;
            var dB = 2;
            var dC = 3;

            stack.push(dA);
            stack.push(dB);
            stack.push(dC);

            assert.equal(3, stack.size, 'pushed 3 datas, dA, dB, dC');

            var top = stack.pop();

            assert.equal(dC, top, 'top = dC');
            assert.equal(2, stack.size, 'size = 2');
        });
    });

    describe('.clear()', function () {
        it('should return 0 when clear a non-empty stack', function () {
            stack.push(1);
            stack.push(2);
            stack.push(3);

            assert.equal(3, stack.size, 'has 3 datas');

            stack.clear();

            assert.equal(0, stack.size, 'cleared, size is 0');
            assert.equal(null, stack.top(), 'top is null');
        });
    });
});

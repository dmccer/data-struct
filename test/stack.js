var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var Stack = require('../stack');

describe('数据结构', function () {
    describe('Stack', function () {
        describe('.size', function () {
            it('should return 0 when init', function () {
                var stack = new Stack();
                assert.equal(0, stack.size, 'init stack size == 0');
            });
        });

        describe('.push()', function () {
            it('should push the data into the stack', function () {
                var stack = new Stack();
                var data = {
                    a: 1,
                    b: 2
                };

                assert.equal(0, stack.size);

                stack.push(data);
                assert.equal(1, stack.size);
                assert.deepEqual(data, stack.top.data, 'the stack pushed the data ok');
            });
        });

        describe('.pop()', function () {
            it('should return false when stack is empty', function () {
                var stack = new Stack();

                assert.isFalse(stack.pop(), 'false, empty stack');
            });
            it('should pop the top of the stack', function () {
                var stack = new Stack();

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
    });
});

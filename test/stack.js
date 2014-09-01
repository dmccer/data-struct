var assert = require('assert');
var Stack = require('../stack');

describe('数据结构', function () {
    describe('Stack', function () {
        describe('.size', function () {
            it('should return 0 when init', function () {
                var stack = new Stack();
                assert.equal(0, stack.size);
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
                assert.equal(data, stack.top.data);
            });
        });
    });
});

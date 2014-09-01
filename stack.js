var Stack = function () {
    this.size = 0;
    this.top = null;
};

Stack.prototype = {
    constructor: Stack,

    push: function (data) {
        var top = this.top;

        this.top = {
            data: data,
            next: top
        };

        this.size++;
    },

    pop: function () {
        if (this.size === 0) {
            return false;
        }

        var top = this.top;
        this.top = top.next;
        this.size--;

        return top.data;
    },

    peek: function () {
        return this.top ? this.top.data : null;
    },

    clear: function () {
        this.size = 0;
        this.top = null;
    }
};

module.exports = Stack;

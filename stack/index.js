var Stack = function () {
    this.size = 0;
    this._top = null;
};

Stack.prototype = {
    constructor: Stack,

    push: function (data) {
        var top = this._top;

        this._top = {
            data: data,
            next: top
        };

        this.size++;
    },

    pop: function () {
        if (this.size === 0) {
            return false;
        }

        var top = this._top;
        this._top = top.next;
        this.size--;

        return top.data;
    },

    top: function () {
        return this._top ? this._top.data : null;
    },

    clear: function () {
        this.size = 0;
        this._top = null;
    }
};

module.exports = Stack;

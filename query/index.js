var groupQueryByNum = function (qs, num) {
    var ql = qs.length;
    var count = ql - num + 1;
    var r = [];

    while(count--) {
        r.push(qs.substr(count, num));
    }

    return r;
}

var match = function (text, queryList) {
    var l = queryList.length;
    var qs;
    var rs;

    while(l--) {
        qs = queryList[l];

        if (text.indexOf(qs) != -1) {
            rs = qs;
            break; 
        }
    }

    return rs;
}

var calc = function (query, text) {
    var ql = query.length;

    if (ql === 0) {
        return {
            qs: '',
            len: 0
        };
    }

    var ok = null;
    var lastMid;
    var lastQs;

    var _fn = function (min, max) {
        var mid = Math.round((min + max) / 2);
        var qs = match(text, groupQueryByNum(query, mid));
        
        if (!qs && max == 1) {
            return false;
        }

        if (qs && mid === ql) {
            return {
                qs: qs,
                len: mid
            };
        }

        if (!qs) {
            if (ok === true) {
                return {
                    qs: lastQs,
                    len: lastMid
                }; 
            }

            ok = false;
            lastMid = mid;
            lastQs = qs;
            return _fn(min, mid);
        } else {
            if (ok === false) {
                return {
                    qs: qs,
                    len: mid
                };
            } else {
                ok = true;
                lastMid = mid;
                lastQs = qs;
                return _fn(mid, max);
            }
        }
    };

    return _fn(0, ql);
};

 module.exports = calc;

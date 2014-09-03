var Stack = require('./index');

// 算法逻辑
// 1. 将 a 上的 n - 1 个移动到 b 上;
// 2. 将 a 第 n 个(即 a 上最底下的)移动到 c 上;
// 3. 把当前的 b 当做之前的 a, 将 b 上的 n - 1 (即原 a 上的 n - 2)个, 移动到 a 上(此步骤同 1, 只是 a, b 角色互换);
// 4. 将 b 上第 n (即原 a 上的 n - 1) 个移动到 c 上(此步骤同 2);
// 5. 此时 a 上有 n - 2 个，b 上 0 个，c 上 2 个; 然后, 回到步骤 1 顺序执行
var hanoi = function (n, a, b, c) {
    if (n > 0) {
        // for test
        hanoi.times++;
        hanoi(n - 1, a, c, b);
        c.push(a.pop());
        hanoi(n - 1, b, a, c);
    }
};

// for test
hanoi.times = 0;

module.exports = hanoi; 

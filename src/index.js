module.exports = function check(str, bracketsConfig) {
    const map = new Map(bracketsConfig);
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === map.get(stack[stack.length - 1])) stack.pop();
        else stack.push(str[i]);
    }
    return stack.length === 0;
}

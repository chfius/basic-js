module.exports = function transform(arr) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
    let arrNew = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (commands.includes(arr[i])) {
                if (arr[i] == '--discard-next') {
                    i++;
                } else if (arr[i] == '--discard-prev') {
                    arrNew.pop();
                } else if ((arr[i] == '--double-next') && (i !== arr.length - 1)) {
                    arrNew.push(arr[i + 1]);
                } else if ((arr[i] == '--double-prev') && (i > 0)) {
                    arrNew.push(arr[i - 1]);
                }
            } else {
                arrNew.push(arr[i]);
            }
        }
        return arrNew;
    } else {
        throw 'Error';
    }
};
module.exports = function createDreamTeam(members) {
    // throw 'Not implemented';
    // remove line with error and write your code here

    let str = [];

    if (Array.isArray(members)) {
        members.forEach(element => {
            if (typeof(element) == "string") {
                for (let i = 0; i < element.length; i++) {
                    if (element[i] !== ' ') {
                        str.push(element[i].toUpperCase());
                        break;
                    }
                }
            }
        });
    }
    return (str.length !== 0) ? str.sort().join('') : false;
};
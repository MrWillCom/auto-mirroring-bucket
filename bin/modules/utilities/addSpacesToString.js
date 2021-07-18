const addSpaceToString = (length) => {
    return (str) => {
        if (str.length < length) {
            var spaces = '';
            for (let i = 0; i < length; i++) {
                spaces = spaces + ' ';
            }
            str = str + spaces;
            str = str.slice(0, length);
        } else if (str.length > length) {
            str = str.slice(0, length - 3) + '...';
        }
        return str
    }
}

module.exports = addSpaceToString;

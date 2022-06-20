const repeatString = function(string, num) {
    let repeat = '';
    if (num > -1) {
        for (let i = 0; i < num ; i++){
         repeat+= string;
        } return repeat;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;

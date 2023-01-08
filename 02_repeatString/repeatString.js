const repeatString = function(word,num) {
    let strWord = '';
    if(num < 0) {
        return 'ERROR';
    }
    for(let i = 1; i <= num; i++) {
       strWord += word;
    }
    return strWord;
};

// Do not edit below this line
module.exports = repeatString;

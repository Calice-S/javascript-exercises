const reverseString = function(str) {
    let text = str;
    const arr = text.split("");
   
    let reverseText = arr.reverse();
    
    let joinText = reverseText.join("");
    
    return joinText;
};

// Do not edit below this line
module.exports = reverseString;

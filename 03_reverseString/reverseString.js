const reverseString = function(phrase) {
    let reverseCharacters = '';
    let reversePhrase = '';
    for (i = 0; i <= phrase.length; i++) {
        reverseCharacters = phrase.charAt(phrase.length - i);
        reversePhrase += reverseCharacters;
    }
    return reversePhrase;
};

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;

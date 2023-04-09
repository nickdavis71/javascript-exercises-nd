const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    const reversedString = processedString.split("").reverse().join("");                    
    return reversedString === processedString;
};

// Do not edit below this line
module.exports = palindromes;

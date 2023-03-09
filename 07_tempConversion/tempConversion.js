const convertToCelsius = function(degreesF) {
    let convertedTemp = 0;
    convertedTemp = (degreesF - 32) * (5/9);
    return Math.round(convertedTemp *10) / 10
};

const convertToFahrenheit = function(degreesC) {
    let convertedTemp = 0;
    convertedTemp = (degreesC * (9/5)) + 32;
    return Math.round(convertedTemp *10) / 10
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

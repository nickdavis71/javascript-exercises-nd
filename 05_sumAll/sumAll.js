const sumAll = function(startNumber, endNumber) {
    let sum = 0;
    if ((startNumber || endNumber) < 0) {
        return 'ERROR'
    }
    if (!Number.isFinite(endNumber, startNumber)) {
        return 'ERROR'
    }
    if (startNumber <= endNumber) {
        for(i = startNumber; i <= endNumber; i++) {
            sum += i;
        }
    }
    else if (startNumber >= endNumber) {
        for(i = startNumber; i >= endNumber; i--) {
            sum += i;
        }
    }
    else {
        return 'ERROR'
    }
    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;

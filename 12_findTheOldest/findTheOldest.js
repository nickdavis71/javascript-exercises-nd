
const findTheOldest = function(people) {
    return people.reduce(function(lastPerson, currentPerson) {
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        const lastPersonAge = getAge(lastPerson.yearOfBirth, lastPerson.yearOfDeath);
        return (lastPersonAge > currentPersonAge) ? lastPerson : currentPerson;
    });
};

const getAge = function(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear;
    }
    return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
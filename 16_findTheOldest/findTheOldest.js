const findTheOldest = function (people) {
  return people.reduce(function (a, b) {
    const lastPeople =
      a.yearOfDeath !== undefined
        ? a.yearOfDeath - a.yearOfBirth
        : new Date().getFullYear() - a.yearOfBirth;
    const nextPeople =
      b.yearOfDeath !== undefined
        ? b.yearOfDeath - b.yearOfBirth
        : new Date().getFullYear() - b.yearOfBirth;
    return lastPeople > nextPeople ? a : b;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

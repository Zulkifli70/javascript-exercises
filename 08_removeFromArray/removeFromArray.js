const removeFromArray = function (array, ...itemToRemove) {
  const array2 = [...array];

  return array2.filter((item) => !itemToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

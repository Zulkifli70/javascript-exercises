const repeatString = function (greet, length) {
  if (length < 0) {
    return "ERROR";
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    result += greet;
  }
  return result;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;

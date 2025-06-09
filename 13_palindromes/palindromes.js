const palindromes = function (string) {
  let removeChar = string.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let check = removeChar.split("").reverse().join("");

  return removeChar === check;
};

// Do not edit below this line
module.exports = palindromes;

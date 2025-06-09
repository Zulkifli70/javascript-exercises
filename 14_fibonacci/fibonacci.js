const fibonacci = function (number) {
  let integer = parseInt(number);
  if (integer < 0) return "OOPS";
  if (integer <= 1) return integer;
  return fibonacci(integer - 1) + fibonacci(integer - 2);
};

// Do not edit below this line
module.exports = fibonacci;

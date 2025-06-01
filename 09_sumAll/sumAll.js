const sumAll = function (i, num) {
  const start = Math.min(i, num);
  const end = Math.max(i, num);
  let total = 0;

  if (
    start < 0 ||
    end < 0 ||
    typeof i !== "number" ||
    typeof num !== "number" ||
    !Number.isInteger(i) ||
    !Number.isInteger(num)
  ) {
    return "ERROR";
  }

  for (i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// cleaner version
// const sumAll = function (min, max) {

//   if (
//     typeof min !== "number" ||
//     typeof max !== "number" ||
//     min < 0 ||
//     max < 0 ||
//     !Number.isInteger(min) ||
//     !Number.isInteger(max)
//   ) {
//     return "ERROR";
//   }

//   if (min > max) {
//     [min, max] = [max, min];
//   }

//   let total = 0;
//   for (let i = min; i <= max; i++) {
//     total += i;
//   }

//   return total;
// };

// Do not edit below this line
module.exports = sumAll;

//

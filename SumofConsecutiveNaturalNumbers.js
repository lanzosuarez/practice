module.exports = input => {
  const { sumConsecutiveNumbers } = require('./lib');
  const sumOfConsecutiveNaturalNumbers = input => {
    let start = 1;
    let counter = 0;
    while (start <= input) { // start <= 15
      let innerInput = start; // 2
      while (innerInput <= input) { //  innerStart <= 15
        const sum = sumConsecutiveNumbers(start, innerInput);
        if (sum > input) {
          break;
        }
        if (sum === input) {
          counter += 1;
        }
        innerInput += 1;
      }
      start += 1;
    }
    console.log('SumOfConsecutiveNaturalNumbers: ', counter);
  }
  sumOfConsecutiveNaturalNumbers(input);
};


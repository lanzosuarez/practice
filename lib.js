const { promisify } = require('util');

exports.liftToPromise = fn => promisify(fn);

exports.sumConsecutiveNumbers = (start, end) => {
  let result = 0;
  for (let x = start; x <= end; x++) {
    result += x;
  }
  return result;
};

exports.measureTime = () => {
  const hrstart = process.hrtime();
  return end => {
    // execution time simulated with setTimeout function
    const hrend = process.hrtime(hrstart);
    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  }
};

exports.pipe = (...fns) => args => fns.reduce((currentVal, currentFunc) => currentFunc(currentVal), args);
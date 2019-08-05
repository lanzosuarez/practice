module.exports = input => {
  // Pi + 1 = Pi + “0” + f(g(Pi))
  const { pipe } = require('./lib');

  const invert = (string = '') => string.split('').map(str => {
    if (str === '0') {
      return '1';
    }
    return '0';
  }).join('');

  const reverse = (string = '') =>
    string.split('').map((_, index) => {
      const end = string.length - 1;
      return string[end - index];
    }).join('');

  const generateString = pipe(reverse, invert);
  let last = '0';


  while (last.length < input) {
    last = `${last}0${generateString(last)}`;
  }
  
  console.log("SelfReplicatingString: ", last[input - 1]);
};
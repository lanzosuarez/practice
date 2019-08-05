module.exports = input => {
  const { pipe } = require('./lib');
  console.log(input);
  const splitInput = string => input.split('\n');
  const getVillagers = pairs => {
    const villagers = {};
    pairs.forEach(pair => {
      const [a, , b] = pair;
      if (villagers[a] === undefined) {
        villagers[a] = null
      }
      if (villagers[b] === undefined) {
        villagers[b] = null;
      }
    });
    return villagers
  };

  const uniqueVillages = pipe(splitInput, getVillagers)(input);
  



};
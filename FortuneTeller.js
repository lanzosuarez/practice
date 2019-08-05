module.exports = () => {

  let N = 10;
  let A = 1, B = 1, K = 5;
  let counter = 0;

  const solveFormula = (i, j) => (i ** A + j ** B) % K;

  let outerCounter = 1;
  let innerCounter = 1;
  while (outerCounter <= N) {
    while (innerCounter <= N) {
      // console.log(outerCounter, innerCounter);
      if (outerCounter !== innerCounter) {
        // console.log("Solving: ", `(${outerCounter},${innerCounter})`);
        const res = solveFormula(outerCounter, innerCounter);
        if (res === 0) {
          counter += 1;
        }
      }
      innerCounter++;
    }
    innerCounter = 1;
    outerCounter++;
  }
  // console.log(outerCounter, innerCounter);
  console.log("FortuneTeller: ", counter);
};
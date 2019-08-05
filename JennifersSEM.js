module.exports = input => {
  //  starts with 0 AD
  let S = 0;
  let E = 0;
  let M = 0;
  let counter = 0;

  //  limit before resettin to 1
  const S_LIMIT = 365;
  const E_LIMIT = 24;
  const M_LIMIT = 29;
  let [S_TARGET, E_TARGET, M_TARGET] = input.split(' ');

  const count = () => {
    S_TARGET = parseFloat(S_TARGET);
    E_TARGET = parseFloat(E_TARGET);
    M_TARGET = parseFloat(M_TARGET);

    while (S !== S_TARGET || E !== E_TARGET || M !== M_TARGET) {
      S += 1;
      E += 1;
      M += 1;
      if (S > S_LIMIT) {
        S = 1;
      }
      if (E > E_LIMIT) {
        E = 1;
      }
      if (M > M_LIMIT) {
        M = 1;
      }
      counter += 1;
    }
  };
  count();
  console.log("JENNIFER SEM: ", counter);
}



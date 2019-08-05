module.exports = () => {
  const ProgramVerifier = (rowCount, colCount) => {
    let map;
    let memory = 0;
    let direction = 'right';
    let position = {
      row: 0,
      col: 0
    };

    const getPosition = () => position;
    const getMemory = () => memory;
    const setMap = inputMap => map = inputMap
    const setDirection = dir => direction = dir

    const movements = {
      move: () => {
        switch (direction) {
          case 'right': {
            movements.moveRight();
            break;
          }
          case 'left': {
            movements.moveLeft();
            break;
          }
          case 'up': {
            movements.moveUp();
            break;
          }
          case 'down': {
            movements.moveDown();
            break;
          }
        }
      },
      changeDirection: command => {
        console.log('Change Direction', command);
        switch (command) {
          case '>': {
            setDirection('right');
            break;
          }
          case '<': {
            setDirection('left')
            break;
          }
          case '^': {
            setDirection('up')
            break;
          }
          case 'v': {
            setDirection('down')
            break;
          }
        }
      },
      moveRight: () => {
        if (position.col === colCount - 1) {
          position = { ...position, col: 0 };
          return;
        }
        position = { ...position, col: position.col + 1 };
      },
      moveLeft: () => {
        if (position.col === 0) {
          position = { ...position, col: colCount - 1 };
          return;
        }
        position = { ...position, col: position.col - 1 };
      },
      moveUp: () => {
        if (position.row === 0) {
          position = { ...position, row: rowCount - 1 };
          return;
        }
        position = { ...position, row: position.row - 1 };
      },
      moveDown: () => {
        if (position.row === rowCount - 1) {
          position = { ...position, row: 0 };
          return;
        }
        position = { ...position, row: position.row + 1 };
      },
      underScore: () => {
        if (memory === 0) {
          setDirection('right')
          return;
        }
        setDirection('left');
      },
      verticalBar: () => {
        if (memory === 0) {
          setDirection('down')
          return;
        }
        setDirection('up')
      },
      questionMark: () => {
        const random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
          case 1: {
            setDirection('right')
            break;
          }
          case 2: {
            setDirection('left')
            break;

          }
          case 3: {
            setDirection('up')
            break;

          }
          case 4: {
            setDirection('down')
            break;
          }
        }
      },
      dot: () => { },
      store: num => memory = num,
      add: () => memory += 1,
      subtract: () => memory -= 1

    };

    const commands = {
      ['<']: movements.changeDirection.bind(null, '<'),
      ['>']: movements.changeDirection.bind(null, '>'),
      ['^']: movements.changeDirection.bind(null, '^'),
      ['v']: movements.changeDirection.bind(null, 'v'),
      ['_']: movements.underScore,
      ['|']: movements.verticalBar,
      ['?']: movements.questionMark,
      ['.']: movements.dot,
      ['+']: movements.add,
      ['-']: movements.subtract,
      store: movements.store
    };

    const executeCommand = command => {
      const checkIfNumber = /^[0-9]$/;
      if (checkIfNumber.test(command)) {
        return commands.store(command);
      }
      return commands[command]();
    }

    const verifyMap = () => {
      const { row, col } = position;
      console.log('/////////////////////');
      console.log('ROW: ', position.row);
      console.log('COL: ', position.col)
      const command = map[row][col];
      console.log('COMMAND: ', command);
      console.log('/////////////////////')
      if (command !== '@') {
        executeCommand(command);
        movements.move();
        return verifyMap()
      };
      return;
    };

    return {
      setMap,
      verifyMap,
      getPosition,
      getMemory
    };
  };

  const rowCount = 2;
  const colCount = 6;
  const input = [
    ['.', '>', '-', '-', 'v', '.'],
    ['.', '^', '-', '-', '?', '@']
  ];
  
  try {
    const verifier = ProgramVerifier(rowCount, colCount);
    verifier.setMap(input);
    verifier.verifyMap();
    console.log("Terminated!!!");
  } catch (error) {
    throw new Error("Cannot be terminated")
  }
};
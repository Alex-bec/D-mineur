    const boardSize = 8;
    const mineCount = 10;
    let board = [];

    function createBoard() {
      const boardElement = document.querySelector('.board');

      for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.row = row;
          cell.dataset.col = col;
          boardElement.appendChild(cell);

          board.push({
            element: cell,
            row: row,
            col: col,
            isMine: false,
            isRevealed: false
          });

          cell.addEventListener('click', handleClick);
        }
      }
    }

    function placeMines() {
      for (let i = 0; i < mineCount; i++) {
        let randomCell = board[Math.floor(Math.random() * board.length)];
        if (!randomCell.isMine) {
          randomCell.isMine = true;
        } else {
          i--;
        }
      }
    }

    function handleClick(event) {
      const cell = event.target;
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      const clickedCell = board.find(cell => cell.row === row && cell.col === col);

      if (clickedCell.isMine) {
        gameOver();
      } else {
        revealCell(clickedCell);
      }
    }

    function revealCell(cell) {
      if (cell.isRevealed) {
        return;
      }

      cell.isRevealed = true;
      cell.element.style.backgroundColor = '#ddd';

      const adjacentCells = getAdjacentCells(cell);

      const mineCount = adjacentCells.filter(adjCell => adjCell.isMine).length;
      if (mineCount > 0) {
        cell.element.textContent = mineCount;
      } else {
        adjacentCells.forEach(adjCell => revealCell(adjCell));
      }
    }

    function getAdjacentCells(cell) {
      const adjacentCells = [];

      for (let row = -1; row <= 1; row++) {
        for (let col = -1; col <= 1; col++) {
          if (row === 0 && col === 0) {
            continue;
          }

          const adjRow = cell.row + row;
          const adjCol = cell.col + col;

          if (adjRow >= 0 && adjRow < boardSize && adjCol >= 0 && adjCol < boardSize) {
            const adjCell = board.find(cell => cell.row === adjRow && cell.col === adjCol);
            adjacentCells.push(adjCell);
          }
        }
      }

      return adjacentCells;
    }

    function gameOver() {
      board.forEach(cell => {
        if (cell.isMine) {
          cell.element.textContent = '💣';
        }
        cell.element.removeEventListener('click', handleClick);
      });
    }

    createBoard();
    placeMines();

const countForWin = 3;
let error = false;
let emptyCell = false;
let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let currentPlayer = 1;

function getField() {
  return field;
}

function makeMove(x, y, z = currentPlayer) {
  switch (true) {
    case (field[y][x] !== 0): error = true; return error;
      break;
    default: field[y][x] = z;
  }
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function reset() {
  field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}
function presetField(newField) {
  field = newField;
}

function setCurrentPlayer(i) {
  currentPlayer = i;
}


function checkWin() {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      const player = field[i][j];
      if (player) { // если клетка не пустая то проверяем от нее на победу
        let count; let k; let l;

        if (field.length - i >= countForWin) {
          // Проверяем линии по вертикали
          count = 1;
          k = i + 1;
          while (k < field.length && count < countForWin && field[k][j] === player) {
            count++;
            k++;
          }

          if (count === countForWin) {
            return player === 1 ? 1 : 2;
          }
        }
        if (field[i].length - j >= countForWin) {
          // Проверяем горизонталь
          count = 1;
          k = j + 1;
          while (k < field[i].length && count < countForWin && field[i][k] === player) {
            count++;
            k++;
          }

          if (count === countForWin) {
            return player === 1 ? 1 : 2;
          }
        }
        if ((field.length - i >= countForWin) && (field[i].length - j >= countForWin)) {
          // Проверяем первую диагональ
          count = 1;
          k = i + 1;
          l = j + 1;
          while (k < field.length && l < field[k].length && count < countForWin && field[k][l] === player) {
            count++;
            k++;
            l++;
          }

          if (count === countForWin) {
            return player === 1 ? 1 : 2;
          }
        }
        if ((field.length - i >= countForWin) && (field[i].length - j >= 0)) {
          // Проверяем вторую диагональ
          count = 1;
          k = i + 1;
          l = j - 1;
          while (k < field.length && l > -1 && count < countForWin && field[k][l] === player) {
            count++;
            k++;
            l--;
          }

          if (count === countForWin) {
            return player === 1 ? 1 : 2;
          }
        }
      } else {
        emptyCell = true;
      }
    }
  }

  if (!emptyCell) {
    return -1;
  }
}


function textToArr(x) {
  const arr = x.split('|');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
  }


  for (let k = 0; k < arr.length; k + 1) {
    for (let l = 0; l < arr[k].length; l + 1) {
      arr[k][l] = Number.parseInt(arr[k][l]);
    }
  }
  return arr;
}

function getError() {
  return error;
}

module.exports = {
  getField,
  makeMove,
  reset,
  presetField,
  setCurrentPlayer,
  checkWin,
  textToArr,
  getError,
};

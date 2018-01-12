export const randomizeBtw = (val, min, max) => {
  const coeff = Math.random() * (max - min) + min
  return Math.round(val * coeff)
}

//Return rounded integer between min and max values
export const getRandIntBtw = (min, max) => Math.round(min + (Math.random() * (max - min)))

const randInt = (max, min = 0) => {
  return Math.round((Math.random() * (max - min)) + min);
}

const getRandomPosition = (arr2D) => {
  //Get max values from rows and cells (height and width wron 2D array)
  let maxRowInArr = arr2D.length - 1;
  let maxCellsInRow = arr2D[0].length - 1;

  //Get random number between 0 and max cells & rows
  let row = randInt(maxRowInArr);
  let cell = randInt(maxCellsInRow);

  let randCell = arr2D[row][cell];

  //Check if the cell is empty
  return randCell === 0 ? { row, cell } : getRandomPosition(arr2D);
}

export default getRandomPosition

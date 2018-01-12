export const getCellValue = (position, map) => map[position.row][position.cell]

export const getCellPosition = (direction, pos) => {
  let output
  switch (direction) {
    case 'left':
      output = {
        ...pos,
        cell: pos.cell - 1
      }
      break;
    case 'right':
      output = {
        ...pos,
        cell: pos.cell + 1
      }
      break;
    case 'up':
      output = {
        ...pos,
        row: pos.row - 1
      }
      break;
    case 'down':
      output = {
        ...pos,
        row: pos.row + 1
      }
      break;
      default: throw new Error('Mauvaise direction, utiliser left, right, bottom or up dans getCellPosition')
  }
  return output
}

import React, { Component } from 'react';

class UniqueCell extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.cellValue !== nextProps.cellValue
  }

  render() {
    const { cellValue } = this.props
    return(
      <td
        className={
          cellValue === 1 ? 'wall' :
          cellValue === 0 ? 'room' :
          cellValue.type === 'player' ? 'player' :
          cellValue.type === 'healthItem' ? 'health-item' :
          cellValue.type === 'ennemy' ? 'ennemy' :
          cellValue.type === 'weapon' ? 'weapon' : null
        }>
      </td>
    )
  }
}

const Cells = ({ row }) => (
  row.map((cellValue, cellIndex) =>
    <UniqueCell cellValue={cellValue} key={cellIndex}/>
  )
)

const Rows = ({ gameMap }) => (
  gameMap.map((row,rowIndex) =>
    <tr key={`row-${rowIndex}`}>
      <Cells row={row}/>
    </tr>
  )
)

const Game = ({ gameMap }) => {
  return (
    <div className="gameboard-container animated jello">
        <table className="board">
          <tbody>
            <Rows gameMap={gameMap}/>
          </tbody>
        </table>
    </div>
  )
}

export default Game

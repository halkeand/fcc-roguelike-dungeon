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
          cellValue === 'player' ? 'player' : null
        }>
      </td>
    )
  }
}

class Cells extends Component {

  render() {
    return (
      this.props.row.map((cellValue, cellIndex) =>
        <UniqueCell cellValue={cellValue} key={cellIndex}/>
      )
    )
  }
}

const Rows = ({ gameMap }) => (
  gameMap.map((row,rowIndex) =>
    <tr key={`row-${rowIndex}`}>
      <Cells row={row}/>
    </tr>
  )
)

const Game = ({ gameMap }) => {
  return (
    <div className="gameboard-container">
        <table className="board">
          <tbody>
            <Rows gameMap={gameMap}/>
          </tbody>
        </table>
    </div>
  )
}

export default Game

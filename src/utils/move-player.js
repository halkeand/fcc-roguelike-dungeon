import { setPlayerOnMap } from './populate-game-map'
import { isCellEmpty, getCellPosition, getCellValue } from './divers'

function movePlayer (direction, thisContext) {
  const { player, gameMap } = thisContext.state
  const cellPos = getCellPosition(direction, player.playerPosition)
  const cellValue = getCellValue(cellPos, gameMap)
  return isCellEmpty(cellValue) && thisContext.setState(state => ({
    gameMap: setPlayerOnMap(state.gameMap, cellPos, player.playerPosition),
    player: {
      ...state.player,
      playerPosition: cellPos
    }
  }))
}

export default movePlayer

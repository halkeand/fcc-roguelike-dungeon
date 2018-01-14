import { setPlayerOnMap } from './populate-game-map'
import { getCellPosition, getCellValue } from './cells-functions'

import { doDamage } from '../objects/player-obj'

function movePlayer (direction, thisContext) {
  const { player, gameMap, isGameOver, isGameFinished } = thisContext.state
  const cellPos = getCellPosition(direction, player.playerPosition)
  const cellValue = getCellValue(cellPos, gameMap)

  const moveFromOneCase = () => {
    thisContext.setState(prevState => ({
      gameMap: setPlayerOnMap(prevState.player, prevState.gameMap, cellPos, player.playerPosition),
      player: {
        ...prevState.player,
        playerPosition: cellPos
      }
    }))
  }

  const accumulateXp = () => {
    thisContext.setState(prevState => ({
      player: {
        ...prevState.player,
        xp: prevState.player.xp += cellValue.getRewardXp()
      }
    }))
  }

  const decreasePlayerHealth = () => {
    thisContext.setState(prevState => ({
      player: {
        ...prevState.player,
        health: prevState.player.health - cellValue.doDamage()
      }
    }))
  }

  const increasePlayerHealth = () => {
    thisContext.setState(prevState => ({
      player: {
        ...prevState.player,
        health: prevState.player.health + cellValue.healthAmt()
      }
    }))
  }

  const setGameOver = () => {
    thisContext.setState(prevState => ({
      isGameOver: true
    }))
  }

  const setNewPlayerWeapon = () => {
    thisContext.setState(prevState => ({
      player : {
        ...prevState.player,
        weapon: cellValue
      }
    }))
  }

  const setAlivesEnnemys = () => {
    thisContext.setState(state => {
      if(state.alivesEnnemys === 1) {
        return {
            alivesEnnemys: state.alivesEnnemys - 1,
            isGameFinished: true
        }
      }
      return {
        alivesEnnemys: state.alivesEnnemys - 1
      }
    })
  }
  const accumulateXpAndMoveFromOneCase = () => {
    accumulateXp()
    moveFromOneCase()
    setAlivesEnnemys()
  }
  if (typeof cellValue === 'number' && !(isGameOver || isGameFinished)) {
    //Switch for empty cell or wall
    switch (cellValue) {
      case 0:
        moveFromOneCase()
        break;
      case 1:
        break;
        default: break;
    }
  } else if(!(isGameOver || isGameFinished)) {
    //Switch for healthItem, weapon or ennemy
    switch (cellValue.type) {
      case 'ennemy':
        cellValue.decreaseHealth(doDamage(player))
        player.health <= 0 ? setGameOver() :
        cellValue.isAlive() ? decreasePlayerHealth() :
        accumulateXpAndMoveFromOneCase()
        break;
      case 'healthItem':
        increasePlayerHealth()
        moveFromOneCase()
        break;
      case 'weapon':
        setNewPlayerWeapon()
        moveFromOneCase()
        break;
      default: break;
    }
  }
}

export default movePlayer

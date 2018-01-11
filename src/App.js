import React, { Component } from 'react'
import './App.css'
import ArrowKeysReact from 'arrow-keys-react'

//Components
import GameBoard from './components/GameBoard'
//Utils
import initGameMap from './utils/init-game-map'
import getRandomPosition from './utils/get-random-position'
import { populateGameMap } from './utils/populate-game-map'
import movePlayer from './utils/move-player'

class App extends Component {
  constructor (props) {
    super (props)

      ArrowKeysReact.config({
        left: () => {
          movePlayer('left', this)
        },
        right: () => {
          movePlayer('right', this)

        },
        up: () => {
          movePlayer('up', this)

        },
        down: () => {
          movePlayer('down', this)

        }
      });

    this.state = {
      gameMap: initGameMap(),
      player: null
    }
  }

  componentDidMount() {
    // Place player, health and ennemies on map
    this.setState(state => {
      const playerPosition = getRandomPosition(state.gameMap)
      return {
        gameMap: populateGameMap(state.gameMap, playerPosition),
        player: {
          playerPosition
        }
      }
    })
  }

  render() {
    const { gameMap } = this.state
    return (
      <div className="App" {...ArrowKeysReact.events} tabIndex="1">
        <GameBoard gameMap={gameMap}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css'
import ArrowKeysReact from 'arrow-keys-react'

//Components
import GameBoard from './components/GameBoard'
import PlayerInfos from './components/PlayerInfos'
import Modal from './components/Modal'
import Legends from './components/Legends'
import Footer from './components/Footer'

import Player from './objects/player-obj'
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

    this.state = this.initState()
  }

  initState = () => {
    return {
        alivesEnnemys: 8,
        isGameOver: false,
        isGameFinished: false,
        gameMap: initGameMap(),
        player: new Player()
    }
  }

  populateState = state => {
    const playerPosition = getRandomPosition(state.gameMap)
    return {
      gameMap: populateGameMap(state.player, state.gameMap, playerPosition),
      player: {
        ...state.player,
        playerPosition
      }
    }
  }

  handleNewParty = () => {
    this.setState(state => this.initState())
    this.setState(state => this.populateState(state))
  }

  componentDidMount() {
    // Place player, health and ennemies on map
    this.setState(state => this.populateState(state))
  }

  render() {
    const { gameMap, player, isGameOver, isGameFinished } = this.state
    return (
      <div className="App" {...ArrowKeysReact.events} tabIndex="1">
        <h1>Roguelike Dungeon Crowler Game</h1>
        <PlayerInfos {...player}/>
        <GameBoard gameMap={gameMap}/>
        { isGameFinished || isGameOver ?
          <Modal
            handleNewParty={this.handleNewParty}
            isGameFinished={isGameFinished}
            isGameOver={isGameOver}
          /> : null
        }
        <Legends></Legends>
        <Footer gitUrl="https://github.com/halkeand/fcc-roguelike-dungeon"></Footer>
      </div>
    );
  }
}

export default App;

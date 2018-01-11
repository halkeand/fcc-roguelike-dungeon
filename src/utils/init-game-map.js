import NewDungeon from 'random-dungeon-generator'

const initGameMap = () => {
  const newDung = NewDungeon({
    width: 50,
    height: 25,
    minRoomSize: 3,
    maxRoomSize: 4
  })

  return newDung.map(arr => arr.map(cell => cell === 1 ? 1 : 0)) // Replace available space by 0 value instead of numbers
}

export default initGameMap

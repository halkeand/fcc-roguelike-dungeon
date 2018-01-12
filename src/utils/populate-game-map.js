import getRandomPosition from './get-random-position'
import Ennemy from '../objects/ennemy-obj'
import Weapon from '../objects/weapon-obj'
import HealthItem from '../objects/healthitem-obj'

const putOnMap = (map, elt) => {
  let position = getRandomPosition(map);
  map[position.row][position.cell] = elt;
}
      const setEnnemysAndHealthOnMap = map => {
        const items = [
          {
            type: new Ennemy(true), //Boss
            volumeOnMap: 1
          },
          {
            type: new HealthItem(),
            volumeOnMap: 7
          }
        ]

        const simpleEnnemys = [
          new Ennemy(),
          new Ennemy(),
          new Ennemy(),
          new Ennemy(),
          new Ennemy(),
          new Ennemy(),
          new Ennemy(),
        ]
        simpleEnnemys.forEach(e => putOnMap(map, e))

        items.forEach(it => {
          for (let i = 0; i < it.volumeOnMap; i++) {
            putOnMap(map, it.type)
          }
        })
        return map;
      }

      const setWeaponsOnMap = map => {
        const weapons = [
          new Weapon('Peanut', 28),
          new Weapon('Cheesecake', 30),
          new Weapon('Spoon', 32),
          new Weapon('Worm', 35),
          new Weapon('Magic Pumpkin', 37),
          new Weapon('Super Extra Mega Weap', 40)
        ]

        weapons.forEach(w => putOnMap(map, w))

        return map
      }

export const setPlayerOnMap = (player, map, newPosition, oldPosition = false) => {
  if (oldPosition) {
    map[oldPosition.row][oldPosition.cell] = 0
  }

  map[newPosition.row][newPosition.cell] = player;
  return map
}

export const populateGameMap = (player, map, playerPosition) => {
  const mapWithPlayer = setPlayerOnMap(player, map ,playerPosition)
  const mapWithHealthAndEnnemy = setEnnemysAndHealthOnMap(mapWithPlayer)
  const finalMap = setWeaponsOnMap(mapWithHealthAndEnnemy)
  return finalMap;
}

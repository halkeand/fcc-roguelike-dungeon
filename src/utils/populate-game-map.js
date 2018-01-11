
//
//       const setEnnemysAndHealthOnMap = map => {
//         const items = [
//           {
//             type: new Ennemy(),
//             volumeOnMap: 8
//           },
//           {
//             type: new Ennemy(true), //Boss
//             volumeOnMap: 1
//           },
//           {
//             type: new HealthItem(),
//             volumeOnMap: 7
//           }
//         ]
//
//         items.forEach(it => {
//           for (let i = 0; i < it.volumeOnMap; i++) {
//             let position = getRandomPosition(map);
//             map[position.h][position.w] = it.type;
//           }
//         })
//         return map;
//       }
//
//       const setWeaponsOnMap = map => {
//         const weapons = [
//           new Weapon('Peanut', 28),
//           new Weapon('Cheesecake', 30),
//           new Weapon('Spoon', 32),
//           new Weapon('Worm', 35),
//           new Weapon('Magic Pumpkin', 37),
//           new Weapon('Super Extra Mega Weap', 40)
//         ]
//
//         weapons.forEach(w => {
//           let position = getRandomPosition(map)
//           map[position.h][position.w] = w
//         })
//
//         return map
//       }

export const setPlayerOnMap = (map, newPosition, oldPosition = false) => {
  if (oldPosition) {
    map[oldPosition.row][oldPosition.cell] = 0
  }

  map[newPosition.row][newPosition.cell] = 'player';
  return map
}

export const populateGameMap = (map, playerPosition) => {
  const mapWithPlayer = setPlayerOnMap(map,playerPosition)
  return mapWithPlayer;
}

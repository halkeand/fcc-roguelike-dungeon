import Ennemy from './ennemy-obj.js'
import { getRandIntBtw } from '../utils.js'
import Player from './player-obj.js'


test('isAlive and decreaseHealth give correct output based on health > 0', () => {
  const newEnnemy = new Ennemy()
  expect(newEnnemy.isAlive()).toEqual(true);
  newEnnemy.decreaseHealth(200)
  expect(newEnnemy.isAlive()).toEqual(false);
})

test('isBoss give correct output based on arguments', () => {
  const newEnnemy = new Ennemy(true)
  expect(newEnnemy.isBoss).toBe(true);
})

test('level give correct output based on isBoss argument', () => {
  const newEnnemy = new Ennemy()
  expect(newEnnemy.level).toBe(3);
  const newEnnemyBoss = new Ennemy(true)
  expect(newEnnemyBoss.level).toBe(4);
})

test('doDamage return a number', () => {
  const newEnnemy = new Ennemy()
  expect(newEnnemy.doDamage()).toEqual(expect.any(Number));
})

test('getRewardXp give correct output based on isBoss argument', () => {
  const newEnnemy = new Ennemy()
  expect(newEnnemy.getRewardXp()).toBeLessThanOrEqual(700);
  expect(newEnnemy.getRewardXp()).toBeGreaterThanOrEqual(400);
  const newEnnemyBoss = new Ennemy(true)
  expect(newEnnemyBoss.getRewardXp()).toBeLessThanOrEqual(2000);
  expect(newEnnemyBoss.getRewardXp()).toBeGreaterThanOrEqual(1500);
})

//Essai de Round
const player = new Player()
const ennemy = new Ennemy(true)

while (player.health > 0 && ennemy.health > 0) {
  let dmg = player.doDamage()
  ennemy.decreaseHealth(dmg)

  if (ennemy.isAlive()) {
    let eDmg = ennemy.doDamage()
    player.changeHealth(eDmg)
  } else {
    break;
  }

  console.log('Round result : Ennemy - ', ennemy.health, ' /// ', 'Player - ', player.health)

}

player.changeXp(ennemy.getRewardXp())

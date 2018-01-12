import Weapon from './weapon-obj'
import { randomizeBtw } from '../utils/get-random-position'

// Amt in functions stands for amount
export default function Player(health = 100, xp = 0, weapon = new Weapon()) {
  this.type = 'player'
  this.health = health
  this.weapon = weapon
  this.xp = xp
  this.isAlive = () => this.health > 0 ? true : false

  this.changeXp = xpChangeAmt => this.xp += xpChangeAmt
  this.changeWeapon = newWeapon => this.weapon = newWeapon
  this.resetXp = () => this.xp = 0
}

export const doDamage = player => {
  const bruteAttack = player.weapon.damageCoeff * (getLevel(player.xp) + 1)
  return randomizeBtw(bruteAttack, .8, 1)
}

export const getLevel = xp => Math.floor(xp/1000)

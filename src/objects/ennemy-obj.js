import { getRandIntBtw, randomizeBtw } from '../utils/get-random-position'

export default function Ennemy(isBoss = false) {
  this.type = 'ennemy'
  this.isBoss = isBoss
  this.health = this.isBoss ? 120 : 80
  this.level = this.isBoss ? 4 : 3

  this.doDamage = () => {
    const bruteAttack = this.isBoss ? this.level * 5 : this.level * 3
    return randomizeBtw(bruteAttack, .6, 1)
  }

  this.isAlive = () => this.health > 0 ? true : false

  this.getRewardXp = () => {
    const rewardRange = this.isBoss ? [1500, 2000] : [400,700]
    return getRandIntBtw(...rewardRange)
  }

  this.decreaseHealth = healthChangeAmt => this.health -= healthChangeAmt
}

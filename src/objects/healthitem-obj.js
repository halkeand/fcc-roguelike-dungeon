import { getRandIntBtw } from '../utils/get-random-position'


export default function HealthItem () {
  this.type = 'healthItem'
  this.healthAmt = () => getRandIntBtw(15,30)
}

import React from 'react';
import 'animate.css'
import { getLevel } from '../objects/player-obj'

class AnimatedSpan extends React.Component {
  render() {
    const { children } = this.props
    return (
      <span className={`animated wobble animated-span`}>{children}</span>
    )
  }
}
const PlayerInfos = ({ health, weapon, xp, level }) => (
      <ul className="player-info-container">
        <li>Health : <AnimatedSpan>{health}</AnimatedSpan></li>
        <li>Weapon : <AnimatedSpan>{weapon.name}</AnimatedSpan></li>
        <li>Level : <AnimatedSpan>{getLevel(xp)}</AnimatedSpan></li>
        <li>Xp : <AnimatedSpan>{xp}</AnimatedSpan></li>
      </ul>
  )

export default PlayerInfos

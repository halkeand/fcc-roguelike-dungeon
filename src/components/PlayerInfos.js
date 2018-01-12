import React from 'react';
import 'animate.css'

class AnimatedSpan extends React.Component {
  render() {
    const { children } = this.props
    return (
      <span className={`animated wobble animated-span`}>{children}</span>
    )
  }
}
const PlayerInfos = ({ health, weapon, xp, level }) => (
    <div className="player-info-container">
      <ul>
        <li>Health : <AnimatedSpan>{health}</AnimatedSpan></li>
        <li>Weapon : <AnimatedSpan>{weapon.name}</AnimatedSpan></li>
        <li>Level : <AnimatedSpan>{Math.floor(xp/1000)}</AnimatedSpan></li>
        <li>Xp : <AnimatedSpan>{xp}</AnimatedSpan></li>
        <li>Dungeon n°1</li>
      </ul>
    </div>
  )

export default PlayerInfos

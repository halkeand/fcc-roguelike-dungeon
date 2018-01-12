import Player from './player-obj.js'
import HealthItem from './healthitem-obj'


test('newPlayer return an object with 3 props : health, weapon and level', () => {
  const newPlayer = new Player(50, 0, 'Cucumber')

  expect(newPlayer).toEqual(expect.objectContaining({
    health: 50,
    xp: 0,
    weapon: 'Cucumber'
  })
);
})

//changeWeapon function
test('default values are correct', () => {
  const newPlayer = new Player()
  expect(newPlayer).toEqual(expect.objectContaining(
    {
      health: 100,
      xp: 0,
      weapon: {
        name: 'Cucumber',
        damageCoeff: expect.any(Number)
      }
    }
  ));
})

//changeHealth function
test('changeHealth with positive number increase health', () => {
  const newPlayer = new Player(50, 0, 'Cucumber')
  newPlayer.changeHealth(30)

  expect(newPlayer).toEqual(expect.objectContaining({health: 80}));
})

test('changeHealth with negative number decrease health', () => {
  const newPlayer = new Player(50, 0, 'Cucumber')
  newPlayer.changeHealth(-30)

  expect(newPlayer).toEqual(expect.objectContaining({health: 20}));
})


//resetXp function
test('resetLevel function set level to 0', () => {
  const newPlayer = new Player(50, 0, 'Cucumber')
  newPlayer.resetXp()

  expect(newPlayer).toEqual(expect.objectContaining({xp: 0}));
})

//changeXp and getLevel functions
test('cahangeXp function hange both xp and level', () => {
  const newPlayer = new Player(50, 0, 'Cucumber')
  newPlayer.changeXp(1100)
  expect(newPlayer.getLevel()).toEqual(1);
  expect(newPlayer.xp).toEqual(1100);
})

//changeWeapon function
test('changeWeapon function set weapon to the given object', () => {
  const newPlayer = new Player(50, 5, 'Cucumber')
  newPlayer.changeWeapon({name: 'newWeap', damageCoeff: 50})
  expect(newPlayer).toEqual(expect.objectContaining(
    {
      weapon: {
        name: 'newWeap',
        damageCoeff: 50
      }
    }
  ));
})

//changeWeapon function
test('changeWeapon function set weapon to the given object', () => {
  const newPlayer = new Player(50, 5, 'Cucumber')
  newPlayer.changeWeapon({name: 'newWeap', damageCoeff: 50})
  expect(newPlayer).toEqual(expect.objectContaining(
    {
      weapon: {
        name: 'newWeap',
        damageCoeff: 50
      }
    }
  ));
})

//doDamage function
test('doDamage() give correct output based on level and weapon', () => {
  const newPlayer = new Player()
  expect(newPlayer.doDamage()).toEqual(expect.any(Number));
})

//isAlive function
test('isAlive give correct output based on health > 0', () => {
  const newPlayer = new Player(-100)
  expect(newPlayer.isAlive()).toEqual(false);
  newPlayer.changeHealth(200)
  expect(newPlayer.isAlive()).toEqual(true);
})

test('changeHealth works with a health-item object', () => {
  const hit = new HealthItem()
  const newPlayer = new Player()
  newPlayer.changeHealth(hit.healthAmt())
  expect(newPlayer.health).toBeGreaterThan(100)
})

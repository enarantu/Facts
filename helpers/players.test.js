const Players = require('./players')
const Blocks = require('./blocks')

test('add & new id test', () => {
    let p = new Players()
    expect(p.add('dude1',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(0)
    expect(p.add('dude2',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(1)
    expect(p.add('dude3',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(2)
})

test('add, remove player test', () => {
    let p = new Players()
    expect(p.add('dude1',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(0)
    expect(p.add('dude2',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(1)
    expect(p.add('dude3',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(2)
    expect(p.players.length).toBe(3)
    p.remove_player(1)
    expect(p.players.length).toBe(2)
    p.remove_player(5)
    expect(p.players.length).toBe(2)
    p.remove_player(0)
    expect(p.players.length).toBe(1)
    expect(p.add('dude3',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(3)
    expect(p.players.length).toBe(2)
    expect(p.add('dude3',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(4)
    p.remove_player(4)
    expect(p.players.length).toBe(2)
    expect(p.add('dude3',new Blocks([{x : 2, y : 2}, {x: 1, y: 2}]))).toBe(4)
    expect(p.players.length).toBe(3)
})

test('update test', () => {
    let p = new Players()
    let b = new Blocks([{x: 2 , y: 3},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    let c = new Blocks([{x: 5 , y: 8},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    let id1 = p.add('dude0', b)
    let id2 = p.add('dude1', c)
    expect(p.is_equal_blocks(id1, b)).toBe(true)
    expect(p.is_equal_blocks(id2, c)).toBe(true)
    expect(p.is_equal_blocks(id1, c)).toBe(false)
    expect(p.is_equal_blocks(id2, b)).toBe(false)
    p.update(id2, b)
    expect(p.is_equal_blocks(id2, b)).toBe(true)
    expect(p.is_equal_blocks(id2, c)).toBe(false)
    expect(p.is_equal_blocks(id1, b)).toBe(true)
    expect(p.is_equal_blocks(id1, c)).toBe(false)
    p.update(id1, c)
    expect(p.is_equal_blocks(id2, b)).toBe(true)
    expect(p.is_equal_blocks(id2, c)).toBe(false)
    expect(p.is_equal_blocks(id1, b)).toBe(false)
    expect(p.is_equal_blocks(id1, c)).toBe(true)
})
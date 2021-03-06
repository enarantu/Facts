const Helper = require('./helper')
const Blocks = require('./blocks')

test('new, remove, update', () => {
    let b = new Blocks([{x : 2, y : 1}, {x : 1, y : 2}])
    let h = new Helper()
    let id = h.new_player("dude", b.get_data())
    expect(h.players.is_equal_blocks(id, b)).toBe(true)
    let b1 = new Blocks([{x : 2, y : 1}, {x : 1, y : 1}])
    expect(h.players.is_equal_blocks(id, b1)).toBe(false)
    h.update(id, b1.get_data())
    expect(h.players.is_equal_blocks(id, b1)).toBe(true)
    expect(h.players.is_equal_blocks(id, b)).toBe(false)
    h.refill()
})
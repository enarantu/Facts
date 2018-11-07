const Blocks = require('./blocks')

test('blocks constructor test', () => {
    let b = new Blocks([])
    expect(b.blocks.length).toBe(0)
})

test('blocks add remove test', ()=> {
    let b = new Blocks([])
    b.add({x : 1, y : 2})
    expect(b.blocks.length).toBe(1)
    b.add({x : 2, y : 2})
    expect(b.blocks.length).toBe(2)
    b.remove_equal_block({x:2, y: 1})
    expect(b.blocks.length).toBe(2)
    b.remove_equal_block({x:1, y: 2})
    expect(b.blocks.length).toBe(1)
    b.remove_equal_block({x:2, y: 2})
    expect(b.blocks.length).toBe(0)
    b.remove_equal_block({x:2, y: 3})
    expect(b.blocks.length).toBe(0)
})

test('blocks remove multiple test', () => {
    let b = new Blocks([])
    b.add({x : 1, y : 2})
    b.add({x : 1, y : 2})
    b.add({x : 2, y : 3})
    b.add({x : 12, y : 2})
    expect(b.blocks.length).toBe(4)
    b.remove_equal_block({x: 1, y : 2})
    expect(b.blocks.length).toBe(2)
    b.add({x : 12, y : 3})
    b.add({x : 12, y : 2})
    b.add({x : 1, y: 2})
    b.remove_equal_block({x:12 , y : 2})
    expect(b.blocks.length).toBe(3)
})

test('blocks contains test', () =>{
    let b = new Blocks([])
    b.add({x: 2, y: 3})
    b.add({x: 1, y: 1})
    expect(b.contains({x: 2, y: 3})).toBe(true)
    expect(b.contains({x: 1, y: 1})).toBe(true)
    expect(b.contains({x: 2, y: 2})).toBe(false)
    b.add({x: 0, y: 2})
    expect(b.contains({x: 2, y: 2})).toBe(false)
    expect(b.contains({x: 0, y: 2})).toBe(true)
    b.add({x: 4, y: 2})
    b.add({x: 4, y: 2})
    expect(b.contains({x: 4, y: 2})).toBe(true)
    b.remove_equal_block({x: 4, y: 2})
    expect(b.contains({x: 4, y: 2})).toBe(false)
    b.remove_equal_block({x: 0, y: 0})
    expect(b.contains({x: 1, y: 1})).toBe(true)

    let d = new Blocks([{x: 2 , y: 3},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    let e = new Blocks([{x: 5 , y: 8},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    expect(d.contains({x: 3, y: 4})).toBe(true)
    expect(d.contains({x: 3, y: 5})).toBe(false)
    expect(d.contains({x: 2, y: 3})).toBe(true)

})

test('blocks equals test', ()=>{
    let b = new Blocks([])
    let c = new Blocks([])
    b.add({x: 2, y: 3})
    b.add({x: 3, y: 4})
    expect(b.equals(c)).toBe(false)
    expect(c.equals(b)).toBe(false)
    c.add({x: 2, y: 3})
    expect(b.equals(c)).toBe(false)
    expect(c.equals(b)).toBe(false)
    c.add({x: 3, y: 4})
    expect(c.equals(b)).toBe(true)
    expect(b.equals(c)).toBe(true)
    c.add({x: 4, y: 5})
    expect(b.equals(c)).toBe(false)
    expect(c.equals(b)).toBe(false)
    expect(c.equals(2)).toBe(false)
    let d = new Blocks([{x: 2 , y: 3},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    let e = new Blocks([{x: 5 , y: 8},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    expect(e.equals(d)).toBe(false)
    expect(d.equals(e)).toBe(false)
})

test('blocks contains type test', () => {
    let b = new Blocks([{x: 2 , y: 3},{x: 3 , y: 4},{x: 4 , y: 5},{x: 5 , y: 6}])
    expect(b.contains_type('double')).toBe(false)
    b.add({x: 2, y: 3, block_type: 'double'})
    b.add({x: 2, y: 1})
    expect(b.contains_type('double')).toBe(true)
    expect(b.contains_type('half')).toBe(false)
    expect(b.contains_type('woof')).toBe(false)
})

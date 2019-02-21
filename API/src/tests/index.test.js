// const expect = require('expect');

const index = require('../index');

it('should add two numbers', () => {
    var res = index.add(20, 20);

    // if(res !== 40) {
    //     throw new Error(`Expected 40, but got ${res}.`)
    // }

    expect(res).toBe(40);
});
const server = require('../index');
const request = require('supertest')

describe('test', () => {
  it('should return a string', (done) => {
    expect('ci with travis')
        .end(done);
  });
});
const server = require('../index');
const request = require('supertest')

describe('test', () => {
  it('should return a string', (done) => {
      request(server)
        .expect('ci with travis')
        .expect(200)
        .end(done);
  });
});
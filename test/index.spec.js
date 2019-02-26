const request = require('supertest')
const app = require('../api/src/index')

describe('API Test', () => {
    it('should return Welcome To Book-A-Meal! as response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Welcome To Book-A-Meal!')
            .end(done);
    });
});
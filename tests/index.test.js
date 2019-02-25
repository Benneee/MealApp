import  request  from 'supertest';

import  app  from '../api/src/index';


describe('API Test', () => {
    it('should return Holla Benneee! as response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Holla Benneee!')
            .end(done);
    });
});
// import { request } from 'supertest';

import expect from 'expect';

const request = require('supertest')

import { app } from '../index';

import menu from '../utils/menuDummyData';



describe('Menu API\'s test', () => {
    /*
        test to get all menu items
        response must be an object
        created menu must also be an object
    */
    describe('#GET, fetch menu API test',() => {
        it('should return all menu items', (done) => {
            request(app)
                .get('/api/v1/menu')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                    .toBeAn('object');
                    expect(res.body.data[0])
                    .toBeAn('object')
                })
                .end(done);
        })
    });

    describe('#POST, add Menu API test', () => {
        it('should create a menu for the day', (done) => {
            request(app)
                .post('/api/v1/menu')
                .send(menu)
                .expect(201)
                .expect((res) => {
                    expect(res.body)
                    .toBeAn('object');
                    expect(res.body.data[0])
                        .toBeAn('object')
                })
                .end(done);           
        })
    })

});
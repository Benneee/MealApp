import request from 'supertest';

import expect from 'expect';

import { app } from '../index';

import meal from '../utils/mealDummyData';
import mealDummyData from '../utils/mealDummyData';


describe('Meal API\'s test', () => {
    /*
    
        test to get all meals
        response must be an object
        created meals must also be of type 'object'  
    */
    describe('#GET, fetch all Meals test', () => {
        it('should return all meals', (done) => {
            request(app)
                .get('/api/v1/meals')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toBeAn('object');
                    expect(res.body.data[0])
                        .toBeAn('object')
                })
                .end(done);
        });

    });

    describe('#POST, add meal API test', () => {
        it('should create a meal', (done) => {
            request(app)
                .post('/api/v1/meals')
                .send(meal)
                .expect(201)
                .expect((res) => {
                    expect(res.body)
                    .toBeAn('object');
                    expect(res.body.data[0])
                        .toBeAn('object')
                        .toIncludeKeys(['id', 'name', 'size', 'price'])
                })
                .end(done);
        })
    })

    describe('#GET, fetch a single meal by id', () => {
        /*
            this test should return a single meal by id
            the next test should return an HTTP code of 204 if meal id doesn't exist
        */
        it('should return a single meal', (done) => {
            request(app)
                .get('/api/v1/meals/1')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toBeAn('object');
                    expect(res.body.data)
                        .toBeAn('object')
                        .toIncludeKeys(['id', 'name', 'size', 'price'])
                })
                .end(done);
        })

        it('should return a code of 404 for an id whose meal doesn\'t exist', (done) => {
            request(app)
                .get('/api/v1/meals/30')
                .expect(404)
                .end(done);
        });
    });

    describe('#PUT, edit an existing meal', () => {
        /*
            this test should return a 202 after an edit
        */
       it('should edit a meal by id successfully', (done) => {
        const mealId = mealDummyData.meals[0].id;
           request(app)
            .put(`/api/v1/meals/${mealId}`)
            .send(meal)
            .expect(202)
            .expect((res) => {
                expect(res.body.response.status)
                .toEqual('success')
                expect(res.body.response.message)
                .toEqual(`Meal with id: ${mealId} edited successfully.`)
            })
            .end(done);
       });

       /*
        this test should return a 404 if meal with given id is not found
       */
      it('should return a 404 status if id of meal does not exist', (done) => {
        const mealId = mealDummyData.meals[mealDummyData.meals.length-1].id + 1
          request(app)
            .put(`/api/v1/meals/${mealId}`)
            .send(meal)
            .expect(404)
            .expect((res) => {
                expect(res.body.response.status)
                .toEqual('error')
                expect(res.body.response.message)
                .toEqual(`Meal with id: ${mealId} not found.`)
            })
            .end(done);
      });
    });

    describe('#DELETE, delete a meal with a given id', () => {
        /*
            this test should return a 202 when deletion is complete
        */

        it('should return a 200 when deletion of a meal with given id is complete', (done) => {
            const mealId = mealDummyData.meals[0].id;
            request(app)
                .delete(`/api/v1/meals/${mealId}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.response.status)
                    .toEqual('success')
                    expect(res.body.response.message)
                    .toEqual(`Meal with id: ${mealId} deleted successfully`)
                })
                .end(done);
        });

        /*
            this test should return a 404 if meal with given id is not found
        */

        it('should return a 404 if meal id does not exist', (done) => {
            const mealId = mealDummyData.meals[mealDummyData.meals.length - 1].id + 1;
            request(app)
                .delete(`/api/v1/meals/${mealId}`)
                .expect(404)
                .expect((res) => {
                    expect(res.body.response.status)
                    .toEqual('error')
                    expect(res.body.response.message)
                    .toEqual(`Meal with id: ${mealId} not found.`)
                })
                .end(done);
        });
    });
});
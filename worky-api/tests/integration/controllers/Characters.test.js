const supertest = require('supertest');

describe('CharactersController.get', () =>{
  describe('#char get()', () => {
    it('get char in the collection by id',  (done) => {
      supertest(sails.hooks.http.app)
      .get('/characters/get-first-char')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) =>{
        const uri = `/characters/get/${response.body.data.id}`;
        supertest(sails.hooks.http.app)
        .get(uri)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) =>{
          if (error) return done(error)
          done()
        })
     })
    })
  })
})
describe('CharactersController.all', () =>{
  describe('#char all()', () => {
    it('get count from characters in the collection',  (done) => {
      supertest(sails.hooks.http.app)
      .get('/characters/get-first-char')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(200,done)
    });
  });

});

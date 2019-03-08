const util = require('util');

describe('Characters (model)', ()  => {
  describe('#find Characters()', () => {
    it('should return 5 document', (done) => {
      Characters.find().limit(5)
      .then((chars) => {
        if (chars.length !== 5) {
          return done(new Error(
            'Should return exactly 1 char -- the characters '+
            'from our test we just limit 5 character from our collection".  '+
            'But instead, got: '+util.inspect(chars, {depth:null})+''
          ));
        }//-•
        return done()
      })
      .catch(done)
    })
  })
})

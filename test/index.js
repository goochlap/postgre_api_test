const dotenv = require('dotenv');
const request = require('supertest');

// Load .env file
dotenv.config();

const api = `http://localhost:${process.env.PORT || 5000}`;

describe('GET /api/check', function () {
  it('it should has status code 200', function (done) {
    request(api)
      .get('/api/check')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

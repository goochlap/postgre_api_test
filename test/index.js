const dotenv = require('dotenv');
const request = require('supertest');
const colors = require('colors');

const video = require('./data/videos');

// Load .env file
dotenv.config();

const api = `http://localhost:${process.env.PORT || 5000}`;

describe('GET /api/check', function () {
  it('it should has status code 200', function (done) {
    request(api)
      .get('/api/check')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Videos flow'.brightBlue, () => {
  // Test the GET Route
  describe('GET /api/videos', () => {
    it('it should GET all videos', (done) => {
      request(api)
        .get('/api/videos')
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });

    it('it should NOT GET all videos', (done) => {
      request(api)
        .get('/api/video')
        .expect(404)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the GET by id route
  describe('GET /api/videos/:id', () => {
    it('it should GET a video by ID', (done) => {
      const id = 40;
      request(api)
        .get(`/api/videos/${id}`)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });

    it('it should NOT GET a video by wrong ID', (done) => {
      const id = 1;
      request(api)
        .get(`/api/videos/${id}`)
        .expect(404)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the POST route
});

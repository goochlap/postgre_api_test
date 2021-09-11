const dotenv = require('dotenv');
const request = require('supertest');
const colors = require('colors');

const { video, videoUpdated } = require('./data/videos');

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
  const id = video.id;

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

  // Test the POST route
  describe('POST /api/videos', () => {
    it('it should POST a new video', (done) => {
      request(api)
        .post('/api/videos')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(video)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the GET by id route
  describe('GET /api/videos/:id', () => {
    it('it should GET a video by ID', (done) => {
      request(api)
        .get(`/api/videos/${id}`)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });

    it('it should NOT GET a video by wrong ID', (done) => {
      request(api)
        .get(`/api/videos/${id + 1}`)
        .expect(404)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the PUT route
  describe('PUT /api/videos/:id', () => {
    it('it should PUT a video', (done) => {
      request(api)
        .put(`/api/videos/${id}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(videoUpdated)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the DELETE route
  describe('DELETE /api/videos/:id', () => {
    it('it should DELETE a video', (done) => {
      request(api)
        .delete(`/api/videos/${id}`)
        .send(videoUpdated)
        .expect(204)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
});

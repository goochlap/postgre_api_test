import { config } from 'dotenv';
import request from 'supertest';
import colors from 'colors';

import { video, videoUpdated, videoToTag } from './data/videos';
import { tag, tagToAdd } from './data/tags';

// Load .env file
config();

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

// Test Videos FLOW

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
        .expect(204)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
});

// Test Tags FLOW

describe('Tags flow'.brightBlue, () => {
  // Test the POST route
  describe('POST /api/tags', () => {
    it('it should POST a new tag', (done) => {
      request(api)
        .post('/api/tags')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(tag)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the DELETE route
  describe('DELETE /api/tags/:id', () => {
    it('it should DELETE a new tag', (done) => {
      request(api)
        .delete(`/api/tags/${tag.id}`)
        .expect(204)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});

// Test Relations FLOW video & tag

describe('Relations flow'.brightBlue, () => {
  // Add a video
  describe('POST /api/videos', () => {
    it('it should POST a new video', (done) => {
      request(api)
        .post('/api/videos')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(videoToTag)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Add a tag
  describe('POST /api/tags', () => {
    it('it should POST a new tag', (done) => {
      request(api)
        .post('/api/tags')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(tagToAdd)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Add a tag to a video
  describe('PATCH /api/videos/:videoId/tags/:tagId', () => {
    it('it should add tag to a video', (done) => {
      const videoId = videoToTag.id;
      const tagId = tagToAdd.id;
      request(api)
        .patch(`/api/videos/${videoId}/tags/${tagId}`)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // remove tag to a video
  describe('PUT /api/videos/:videoId/tags/:tagId', () => {
    it('it should remove tag to a video', (done) => {
      const videoId = videoToTag.id;
      const tagId = tagToAdd.id;
      request(api)
        .put(`/api/videos/${videoId}/tags/${tagId}`)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
});

// Drop DB

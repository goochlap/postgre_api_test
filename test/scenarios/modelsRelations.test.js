import request from 'supertest';

import { videoToTag } from '../data/videos';
import { tagToAdd } from '../data/tags';

const api = `http://localhost:${process.env.PORT || 5000}`;

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

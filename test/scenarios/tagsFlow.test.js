import request from 'supertest';

import { tag } from '../data/tags';

const api = `http://localhost:${process.env.PORT || 5000}`;

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

  // Test the GET route
  describe('GET /api/tags/:id', () => {
    it('it should GET a tag and return his videos', (done) => {
      request(api)
        .get(`/api/tags/${tag.id}`)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Test the DELETE route
  describe('DELETE /api/tags/:id', () => {
    it('it should DELETE a tag', (done) => {
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

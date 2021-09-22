import { config } from 'dotenv';
import request from 'supertest';
import colors from 'colors';

// import models
import model from '../src/models';

const { Tag, Video } = model;

// import DB
import db from '../src/models/index';

// Load .env file
config();

const api = `http://localhost:${process.env.PORT || 5000}`;

before(async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.'.brightGreen);
  } catch (err) {
    throw new Error(err);
  }
});

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

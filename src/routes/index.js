import { createVideo, getVideos } from '../controllers/videos';

export default (app) => {
  app.get('/videos', getVideos);
};

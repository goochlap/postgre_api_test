import {
  createVideo,
  getVideos,
  getVideo,
  updateVideo,
  removeVideo
} from '../controllers/videos';
import videos from '../controllers/videos';

export default (app) => {
  app.get('/videos', getVideos);
  app.get('/videos/:id', getVideo);
  app.post('/videos', createVideo);
  app.put('/videos/:id', updateVideo);
  app.delete('/videos/:id', removeVideo);
};

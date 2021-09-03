import { Router } from 'express';
import {
  createVideo,
  getVideos,
  getVideo,
  updateVideo,
  removeVideo
} from '../controllers/videos';

const router = Router();

router.route('/').get(getVideos).post(createVideo);

router.route('/:id').get(getVideo).put(updateVideo).delete(removeVideo);

export default router;

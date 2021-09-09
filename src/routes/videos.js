import { Router } from 'express';
import {
  createVideo,
  getVideos,
  getVideo,
  updateVideo,
  removeVideo,
  addTagToVideo,
  removeTagToVideo
} from '../controllers/videos';

const router = Router();

router.route('/').get(getVideos).post(createVideo);

router.route('/:id').get(getVideo).put(updateVideo).delete(removeVideo);

router.route('/:videoId/tags/:tagId').patch(addTagToVideo).put(removeTagToVideo);

export default router;

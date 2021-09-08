import { Router } from 'express';
import { createTag, removeTag, addTagToVideo } from '../controllers/tags';

const router = Router();

router.route('/').post(createTag);
router.route('/:id').delete(removeTag);
router.route('/:tagId/:videoId').patch(addTagToVideo);

export default router;

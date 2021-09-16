import { Router } from 'express';
import { createTag, removeTag, getTag } from '../controllers/tags';

const router = Router();

router.route('/').post(createTag);
router.route('/:id').delete(removeTag);
router.route('/:id').get(getTag);

export default router;

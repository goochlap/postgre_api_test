import { Router } from 'express';
import { createTag, removeTag } from '../controllers/tags';

const router = Router();

router.route('/').post(createTag);
router.route('/:id').delete(removeTag);

export default router;

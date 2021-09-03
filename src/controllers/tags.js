import model from '../models';
import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../middlewares/async';

const { Tag } = model;

// @desc      Create new tag
// @route     POST /tags
// @access    Public
export const createTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.create(req.body);

  res.status(201).json({ success: true, data: tag });
});

// @desc      Delete tag
// @route     DELETE /tags/:id
// @access    Public
export const removeTag = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const tag = await Tag.findOne({ where: { id } });
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${id}`, 404));

  await tag.destroy({ where: { id } });

  next(res.status(204));
});

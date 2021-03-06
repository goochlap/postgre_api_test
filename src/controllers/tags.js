import model from '../models';
import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../middlewares/async';

const { Tag, Video } = model;

// @desc      Create new tag
// @route     POST /api/tags
// @access    Public
export const createTag = asyncHandler(async (req, res, next) => {
  // Check if tag already exist in DB
  const checkTag = await Tag.findOne({ where: { value: req.body.value } });
  if (checkTag)
    return next(new ErrorResponse(`Tag ${checkTag.value} already exist `, 400));

  const tag = await Tag.create(req.body);

  res.status(201).json({ success: true, data: tag });
});

// @desc      Delete tag
// @route     DELETE /api/tags/:id
// @access    Public
export const removeTag = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const tag = await Tag.findByPk(id);
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${id}`, 404));

  await tag.destroy({ where: { id } });

  next(res.status(204));
});

// @desc      Get tag including his videos
// @route     GET /api/tags/:id
// @access    Public
export const getTag = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const tag = await Tag.findOne({ where: { id }, include: [Video] });
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${id}`, 404));

  res.status(200).json({ success: true, videos: tag.Videos });
});

import model from '../models';
import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../middlewares/async';

const { Tag, Video } = model;

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
  const { id } = req.params;

  const tag = await Tag.findByPk(id);
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${id}`, 404));

  await tag.destroy({ where: { id } });

  next(res.status(204));
});

// @desc      Add tag to a video
// @route     PATCH /tags/:tagId/:videoId
// @access    Public
export const addTagToVideo = asyncHandler(async (req, res, next) => {
  const { tagId, videoId } = req.params;

  const tag = await Tag.findByPk(tagId);
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${tagId}`, 404));

  const video = await Video.findByPk(videoId);
  if (!video)
    return next(new ErrorResponse(`Video not found with id ${videoId}`, 404));

  await video.addTag(tag);

  const result = await Video.findOne({
    where: { name: video.name },
    include: Tag
  });

  res.status(201).json({ success: true, data: video });
});

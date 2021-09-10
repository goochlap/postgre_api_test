import model from '../models';
import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../middlewares/async';

const { Video, Tag } = model;

// // @desc      Get all videos
// // @route     GET /videos
// // @access    Public
export const getVideos = asyncHandler(async (req, res, next) => {
  const videos = await Video.findAll();

  res.status(200).json({ success: true, count: videos.length, data: videos });
});

// @desc      Get a single video
// @route     GET /api/videos/:id
// @access    Public
export const getVideo = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const video = await Video.findByPk(id);

  if (!video) {
    return next(new ErrorResponse(`Video not found with id ${id}`, 404));
  }

  res.status(200).json({ success: true, data: video });
});

// @desc      Create new video
// @route     POST /api/videos
// @access    Public
export const createVideo = asyncHandler(async (req, res, next) => {
  const video = await Video.create(req.body);

  res.status(201).json({ success: true, data: video });
});

// @desc      Update video
// @route     PUT /api/videos/:id
// @access    Public
export const updateVideo = asyncHandler(async (req, res, next) => {
  const { name, url, description } = req.body;
  const { id } = req.params;

  const video = await Video.findByPk(id);
  if (!video) {
    return next(new ErrorResponse(`Video not found with id ${id}`, 404));
  }

  await video.update({ name, url, description });

  const updatedVideo = video.get();

  res.status(200).json({ success: true, data: updatedVideo });
});

// @desc      Remove video
// @route     DELETE /api/videos/:id
// @access    Public
export const removeVideo = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const video = await Video.findByPk(id);

  if (!video) {
    return next(new ErrorResponse(`Video not found with id ${id}`, 404));
  }

  await video.destroy({ where: { id } });

  res.status(204).json({ success: true, data: {} });
});

// @desc      Add tag to a video
// @route     PATCH /api/videos/:videoId/tags/:tagId
// @access    Public
export const addTagToVideo = asyncHandler(async (req, res, next) => {
  const { videoId, tagId } = req.params;

  const video = await Video.findByPk(videoId);
  if (!video)
    return next(new ErrorResponse(`Video not found with id ${videoId}`, 404));

  const tag = await Tag.findByPk(tagId);
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${tagId}`, 404));

  // Get all video tags
  const videoTags = await video.getTags();

  // Check if a tag is already assigned
  videoTags.forEach((tagValue) => {
    if (tagValue.value === tag.value) {
      return next(
        new ErrorResponse(`The tag ${tagValue.value} is already assigned`, 400)
      );
    }
  });

  // Special method addTag() provided by sequelize
  await video.addTag(tag);

  const taggedVideo = await video.get();
  const tags = await video.getTags();

  res.status(201).json({ success: true, video: taggedVideo, tags });
});

// @desc      Remove tag to a video
// @route     PUT /api/videos/:videoId/tags/:tagId
// @access    Public
export const removeTagToVideo = asyncHandler(async (req, res, next) => {
  const { videoId, tagId } = req.params;

  const video = await Video.findByPk(videoId);
  if (!video)
    return next(new ErrorResponse(`Video not found with id ${videoId}`, 404));

  const tag = await Tag.findByPk(tagId);
  if (!tag) return next(new ErrorResponse(`Tag not found with id ${tagId}`, 404));

  await video.removeTag(tag);

  const VideoUpdated = await video.get();

  res.status(200).json({ success: true, VideoUpdated, tagRemoved: tag });
});

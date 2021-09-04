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
// @route     GET /videos/:id
// @access    Public
export const getVideo = asyncHandler(async (req, res, next) => {
  const video = await Video.findOne({ where: { id: req.params.id } });

  if (!video) {
    return next(
      new ErrorResponse(`Video not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: video });
});

// @desc      Create new video
// @route     POST /videos
// @access    Public
export const createVideo = asyncHandler(async (req, res, next) => {
  const video = await Video.create(req.body);

  res.status(201).json({ success: true, data: video });
});

// @desc      Update video
// @route     PUT /videos/:id
// @access    Public
export const updateVideo = asyncHandler(async (req, res, next) => {
  const { name, url, description } = req.body;
  const id = req.params.id;

  const video = await Video.findOne({ where: { id } });

  if (!video) {
    return next(new ErrorResponse(`Video not found with id ${id}`, 404));
  }

  const updatedVideo = await video.update({ name, url, description });

  res.status(200).json({ success: true, data: updateVideo });
});

// @desc      Remove video
// @route     DELETE /videos/:id
// @access    Public
export const removeVideo = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const video = await Video.findOne({ where: { id } });

  if (!video) {
    return next(new ErrorResponse(`Video not found with id ${id}`, 404));
  }

  await video.destroy({ where: { id } });

  res.status(204).json({ success: true, data: {} });
});

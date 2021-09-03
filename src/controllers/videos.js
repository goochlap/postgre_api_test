import model from '../models';

const { Video } = model;

// // @desc      Get all videos
// // @route     GET /videos
// // @access    Public
export const getVideos = async (req, res, next) => {
  try {
    const videos = await Video.findAll();

    res.status(200).json({ success: true, count: videos.length, data: videos });
  } catch (err) {
    next(err);
  }
};

// @desc      Get a single video
// @route     GET /videos/:id
// @access    Public
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findOne({ where: { id: req.params.id } });

    res.status(200).json({ success: true, data: video });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Create new video
// @route     POST /videos
// @access    Public
export const createVideo = async (req, res, next) => {
  try {
    const video = await Video.create(req.body);

    res.status(201).json({ success: true, data: video });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Update video
// @route     PUT /videos/:id
// @access    Public
export const updateVideo = async (req, res, next) => {
  try {
    const { name, url, description } = req.body;
    const id = req.params.id;

    const video = await Video.update(
      { name, url, description },
      { where: { id } }
    );

    res.status(200).json({ success: true, data: video });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Remove video
// @route     DELETE /videos/:id
// @access    Public
export const removeVideo = async (req, res, next) => {
  try {
    const id = req.params.id;

    const video = await Video.destroy({ where: { id } });

    res.status(204).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

import Video from '../models/Video';

// @desc      Get videos
// @route     GET /videos
// @access    Public
export const getVideos = async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ success: true, data: 'get all videos' });
};

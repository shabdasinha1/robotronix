import {
  createLeader,
  getAllLeaders,
  deleteLeader,
} from "./industryLeader.service.js";

/*-----------------------UPLOAD IMAGE----------------------- */
export const uploadLeaderImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const imagePath = req.file.path;

    const leader = await createLeader(imagePath);

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: leader,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*-----------------------GET ALL IMAGE OF LEADERS----------------------- */
export const getLeaders = async (req, res) => {
  try {
    const leaders = await getAllLeaders();

    res.status(200).json({
      success: true,
      data: leaders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/*-----------------------DELETE IMAGE OF LEADERS----------------------- */
export const removeLeader = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteLeader(id);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
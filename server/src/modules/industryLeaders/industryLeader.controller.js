import {
  createLeader,
  getAllLeaders,
  deleteLeader,
  updateLeaderById,
} from "./industryLeader.service.js";

/*-----------------------CREATE LEADER----------------------- */
export const uploadLeaderImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const { leaderName, isActive } = req.body;

    if (!leaderName) {
      return res.status(400).json({
        success: false,
        message: "Leader name is required",
      });
    }

    const imagePath = req.file.path;

    const leader = await createLeader({
      leaderName,
      image: imagePath,
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Leader created successfully",
      data: leader,
    });
  } catch (error) {
    // Duplicate error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Leader name already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*-----------------------GET ALL LEADERS----------------------- */
export const getLeaders = async (req, res) => {
  try {
    const { isActive } = req.query;

    let filter = {};

    if (isActive !== undefined) {
      // If query param is provided
      filter.isActive = isActive === "true";
    } else {
      // Default: only active leaders
      filter.isActive = true;
    }

    const leaders = await getAllLeaders(filter);

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

/*-----------------------DELETE LEADER----------------------- */
export const removeLeader = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteLeader(id);

    res.status(200).json({
      success: true,
      message: "Leader deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateLeader = async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("REQ FILE:", req.file);

  try {
    const { id } = req.params;

    const updateData = {
      ...req.body, // leaderName and optional isActive
    };

    // Convert string "true"/"false" to boolean if present
    if (updateData.isActive === "true") updateData.isActive = true;
    if (updateData.isActive === "false") updateData.isActive = false;

    // If new image uploaded
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updated = await updateLeaderById(id, updateData);

    res.status(200).json({
      success: true,
      message: "Leader updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

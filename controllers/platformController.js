const Platform = require("../models/Platform");

// GET ALL
const getAllPlatforms = async (req, res) => {
  const platforms = await Platform.find();
  try {
    return res.status(200).json(platforms);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get platforms` });
  }
};

// GET ONE
const getOnePlatform = async (req, res) => {
  const { id } = req.params;
  const platform = await Platform.findById(id);
  try {
    return res.status(200).json(platform);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get platform` });
  }
};

// CREATE
const createPlatform = async (req, res) => {
  const platformToCreate = await Platform.create(req.body);
  try {
    return res.status(201).json(platformToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create a platform` });
  }
};

// UPDATE
const updatePlatform = async (req, res) => {
  const { id } = req.params;
  const platformToUpdate = await Platform.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(platformToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update a platform` });
  }
};

// DELETE
const deletePlatform = async (req, res) => {
  const { id } = req.params;
  await Platform.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete platform` });
  }
};

module.exports = {
  getAllPlatforms,
  getOnePlatform,
  updatePlatform,
  deletePlatform,
  createPlatform,
};

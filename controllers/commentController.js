const Comment = require("../models/Comment");

// GET ALL COMMENTS
const getAllComments = async (req, res) => {
  const comments = await Comment.find();
  try {
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get comments` });
  }
};

// GET ONE COMMENT
const getCommentById = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findById(id);
  try {
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get comment` });
  }
};

// CREATE COMMENT
const createComment = async (req, res) => {
  const commentToCreate = await Comment.create(req.body);
  try {
    return res.status(201).json(commentToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create comment` });
  }
};

// UPDATE COMMENT
const updateComment = async (req, res) => {
  const { id } = req.params;
  const commentToUpdate = await Comment.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(commentToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update comment` });
  }
};

// DELETE COMMENT
const deleteComment = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted!` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete comment` });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};

const express = require("express");
const {
  getAllCommentsFromGame,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const router = express.Router();

router.get("/game/:id", getAllCommentsFromGame);
router.get("/comment/:id", getCommentById);
router.post("/comment", createComment);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

module.exports = router;

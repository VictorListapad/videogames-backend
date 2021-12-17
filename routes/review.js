const express = require("express");
const {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getAllReviewsForGame,
} = require("../controllers/reviewController");
const router = express.Router();

router.get("/", getAllReviews);
router.get("/review/:id", getReviewById);
router.post("/review/:gameId/:userId", createReview);
router.put("/review/:id", updateReview);
router.delete("/review/:id", deleteReview);
router.get("/game/:id", getAllReviewsForGame);

module.exports = router;
